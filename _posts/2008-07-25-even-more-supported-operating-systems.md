---
layout: post
title: Even more supported operating systems
---
With the upcoming version 0.6 of DMDirc (we know that it's been a while since the last big release, we'll blog about that soon) we have added support for even more operating systems.

As you probably know, DMDirc is written in Java which gives us a huge advantage as far as cross-platform compatibility is concerned. Java runs on all the major operating systems so most of the hard work has been done for us.

Up to DMDirc 0.5.6 we only supported Windows and Linux and provided a separate jar-only download for other platforms. For 0.6 the supported list of operating systems has more than doubled; we now package DMDirc for:
<ol>
	<li>Linux</li>
	<li>Windows</li>
	<li>OS X</li>
	<li>Open Solaris (and normal Solaris)</li>
	<li>BSD (tested on PC-BSD, which is FreeBSD at the core)</li>
</ol>

This pretty much covers all major non-server operating systems, which we are quite pleased about.

The Installer for DMDirc runs on all of the above systems (apart from OS X, which has its own installation method) and where possible can download and install Java automatically. Currently the only exception to this is BSD, where users will need to compile the jdk16 port manually — unfortunately Sun's licensing prevents redistribution of the modified JRE used on BSD.

The nightly builds have been working on all of the above operating systems for a while now, and you can browse and download the installers from our <a href="http://www.dmdirc.com/en/nightlies">nightly builds</a> page.