---
layout: post
title: OS X Support
author: Shane McCormack
author_github: ShaneMcC
---
Now that Apple have re-released their 'developer preview' of Java 6, we can begin work on improving DMDirc's compatibility with OS X. Currently the release only works on 64-bit Intel processors (Xeons or Core2Duos - not CoreDuos, CoreSolos or PowerPCs) running Leopard. They had previously released a developer preview for Tiger, but we do not have access to it, so are unable to tell how well it works with DMDirc (if at all).

If your machine fits the bill, you can download the developer preview from the Apple Developer site:
<ul>
	<li>Go to <a href="http://www.apple.com/java">http://www.apple.com/java</a></li>
	<li>Click on "Java Downloads"</li>
	<li>Click on "Java SE 6 Developer Preview" &mdash; <em>This will redirect you to the ADC site.</em></li>
	<li>Login to the ADC site (<em>you may need to register first.</em>)</li>
	<li>Click on "Downloads"</li>
	<li>Click on "Java" in the sidebar</li>
	<li>Download the "Java SE 6 Developer Preview"</li>
	<li>Install</li>
</ul>

Once you have the developer preview installed, you can download a nightly build of DMDirc from <a href="http://www.dmdirc.com/nightlies">http://www.dmdirc.com/nightlies</a> or you can build your own by checking out the source code from our subversion repository (if you have the developer tools installed) by running the following commands:
<code>
svn checkout http://dmdirc.googlecode.com/svn/trunk/ dmdirc
cd dmdirc/trunk/installer
./release.sh --target osx this
mv output/DMDirc.dmg ~/Desktop/DMDirc.dmg
</code>

Now you can mount the image, and drag DMDirc to the applications folder to install it.

However, at the moment there is a bug with the "First Run Wizard" that we use to extract plugins and actions for the first time, so you will need to run the following in a terminal prior to running the client to make it work. This assumes that you installed DMDirc into the Applications folder and not somewhere else.
<em>Edit:</em> This bug has been fixed.
<code>
mkdir -p ~/Library/Preferences/DMDirc/
cd ~/Library/Preferences/DMDirc/
unzip /Applications/DMDirc.app/Contents/Resources/Java/DMDirc.jar plugins/*.jar com/dmdirc/actions/defaults/*
mv com/dmdirc/actions/defaults actions
rm -Rf com
echo "general.firstRun=false" >> dmdirc.config
echo "general.addonrevision=10" >> dmdirc.config
echo "updater.enable=true" >> dmdirc.config
echo "general.submitErrors=true" >> dmdirc.config
</code>

The last two lines can be omitted if you do not wish to receive update notifications, or automatically send error reports to the developers. We would however prefer you to have them both enabled.

Now you can enjoy DMDirc on OS X :)

Feel free to raise any issues on our <a href="http://bugs.dmdirc.com/">bug tracker</a>, leave a comment here, or contact us in #DMDirc on Quakenet