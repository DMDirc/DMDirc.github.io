---
layout: post
title: "OS X Support: Part 2"
author: Shane McCormack
author_github: ShaneMcC
---
<a href="{% post_url 2008-03-06-os-x-support %}">As previously mentioned</a>, once Apple released Java6 for OS X I set about updating the scripts we use for building the installers and nightlies so that we could support OS X officially for DMDirc 0.6.

To do this we needed to be able to create a DMG file to distribute it in, and we wanted this to be done by our current build scripts. As you may be aware, we do all of our development on Ubuntu Linux (which we also use on the DMDirc build/web server) so our current build scripts are a bunch of bash scripts that build the various installers (.run files for Linux, and .exes for Windows).

Other projects exist which distribute their cross-platform releases on Linux, OS X and Windows, so I looked at the build processes for both Firefox and Inkscape which both have apple releases. Unfortunately both of these projects appear to use an Apple machine to create the releases. This roughly translated to the following:
<pre>
	# DMDirc-dmg contains the files we want to put in the dmg
	hdiutil create -volname "DMDirc" -fs HFS+ -srcfolder DMDirc-dmg -format UDRW DMDirc.RW.dmg
	hdiutil attach DMDirc.RW.dmg
	bless -openfolder /Volumes/DMDirc
	hdiutil detach /Volumes/DMDirc
	hdiutil convert DMDirc.RW.dmg -format UDZO -imagekey zlib-level=9 -o DMDirc.dmg
</pre>

Which, while it does work (and is what we use if the installer is being built on OS X), wasn't an acceptable solution as it relied on an OS X install.

I then discovered <a href="http://www.shrewdlogic.com/wiki/AppleDMGUnderLinux">a wiki page</a> which describes a method that works under Linux. After compiling a Linux-compatible version of Apple's <code>mkhfs</code> program we could now do something along the lines of:
<pre>
	# DMDirc-dmg contains the files we want to put in the dmg
	SIZE=$((`du -sb DMDirc-dmg | awk '{print $1}'`  + 10))
	if [ ${SIZE} -lt 4194304 ]; then
		echo "Size is less than 4MB"
		SIZE=4194304;
	fi;
	dd if=/dev/zero of=DMDirc.img bs=${SIZE} count=1
	mkfs.hfsplus -v 'DMDirc' DMDirc.img
	
	mkdir DMDirc.img-mounted
	mount DMDirc.img-mounted
	MOUNTRES=${?}
	if [ ${MOUNTRES} -ne 0 ]; then
		# Try using full parameters - could be running as root.
		mount -t hfsplus -o loop DMDirc.img DMDirc.img-mounted
		MOUNTRES=${?}
	fi;
	if [ ${MOUNTRES} -ne 0 ]; then
		echo "Unable to mount, need root access or an fstab entry like:"
		echo "${PWD}/DMDirc.img ${PWD}/DMDirc.img-mounted auto users,noauto,loop 0 0"
		exit 1;
	fi;
	mv -fv $DMDirc-dmg/* DMDirc.img-mounted
	mv -fv DMDirc-dmg/.[A-Za-z]* DMDirc.img-mounted
	umount DMDirc.img-mounted
	mv DMDirc.img DMDirc.dmg
</pre>

This was an improvement, as images could now be created under Linux, however it still also had lots of problems:
<ul>
	<li>images have to be at least 4MB (compared to 1.3mb when created using the OS X method),
	<li>they're created read-write (compared to read-only when created using the OS X method), and
	<li>they do not auto-open when mounted (the OS X method can "bless" the image).
</ul>

After a short while, I discovered <a href="http://gentoo-wiki.com/HOWTO_hfsplus">the gentoo wiki</a> had a page on hfsplus, which had a version of <code>diskdev-cmds</code> that allowed for images that were as small as 512kb. Using this, I was able to edit the first part of above code to something like:
<pre>
	# DMDirc-dmg contains the files we want to put in the dmg
	SIZE=$((`du -sb DMDirc-dmg | awk '{print $1}'`  + 10))
	if [ ${SIZE} -lt 524288 ]; then
		echo "Size is less than 512kb"
		SIZE=524288;
	fi;
	dd if=/dev/zero of=DMDirc.img bs=${SIZE} count=1
	mkfs.hfsplus -v 'DMDirc' DMDirc.img
	# however older versions of mkfs.hfs will only create 4mb+ sized images :/
	if [ $? -eq 1 ]; then
		if [ ${SIZE} -lt 4194304 ]; then
			echo "Size is less than 4MB"
			SIZE=4194304;
		fi;
		dd if=/dev/zero of=DMDirc.img bs=${SIZE} count=1
		mkfs.hfsplus -v 'DMDirc' DMDirc.img
	fi;
</pre>

This still produced 3.8mb images, so basically had all the same problems as the old method. The actual code we used was also a lot less tidy as sometimes the size returned by <code>du</code> was too small, so the code looped increasing the size until it got a successful image.

However I recently discovered a much tidier method, which we now use. <code>mkisofs</code> has the ability to create and bless <code>hfs</code> images:
<pre>
	# DMDirc-dmg contains the files we want to put in the dmg
	mkisofs -V 'DMDirc' -no-pad -r -apple -o "DMDirc-dmg" -hfs-bless "/Volumes/DMDirc" DMDirc.dmg
</pre>

This code has the advantages of:

 * being much tidier than the old code,
 * not requiring a loop to get a correctly-sized image,
 * being able to bless the image,
 * creating a read-only image, and
 * not requiring a patched version of Apple's <code>diskdev-cmds</code>

All that was left now was to fix the file size (which was still 3.8 mb). To do this, I found a new project (<a href="http://github.com/planetbeing/libdmg-hfsplus"><code>libdmg-hfsplus</code></a>) which is a DMG manipulation library for Linux capable of producing compressed DMG files. I jumped at this, downloaded and compiled it, and came up with:
<pre>
	# DMDirc-dmg contains the files we want to put in the dmg
	mkisofs -V 'DMDirc' -no-pad -r -apple -o "DMDirc-dmg" -hfs-bless "/Volumes/DMDirc" DMDirc.dmg.pre
	./dmg dmg DMDirc.dmg.pre DMDirc.dmg
</pre>

I copied this image to an OS X machine and tried to open it and was greeted by a "CRC Mismatch" error. After digging around a little I found the cause of this (The code generates a "Master Checksum" which always seems to generate the same for converting DMGs using the code above, but OS X doesn't like it), and produced a patched version of <code>libdmg</code>, which can be found on my personal website: <a href="http://shanemcc.co.uk/libdmg/">http://shanemcc.co.uk/libdmg/</a>, along with a script that will patch it for you if you want to compile your own.

With this newly patched version of the DMG binary from <code>libdmg-hfsplus</code> we are now able to produce <code>DMDirc.dmg</code> on both OS X and Linux with similar results (read-only, blessed and compressed).

It is also worth pointing out that Java 6 for OS X is no longer a "developer preview" only, and can be obtained by anyone with a 64-bit Intel-based Mac running 10.5.2 or later from the <a href="http://www.apple.com/support/downloads/javaformacosx105update1.html">Apple website</a>. I would imagine that it is also available using the software update facility in the Apple menu.

OS X nightly builds of DMDirc are available on the <a href="http://www.dmdirc.com/nightlies">nightly builds</a> page of the website.