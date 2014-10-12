---
layout: post
title: "DMDirc 0.6.3m1 Released."
author: Shane McCormack
author_github: ShaneMcC
---
After nearly a year, we have just released DMDirc 0.6.3m1, with over 1000 commits resulting in <a href="http://wiki.dmdirc.com/documentation:changelogs:0.6.3m1">over 200</a> feature additions, bug fixes and other changes, including:

* A redesign of the preferences dialog
* Improved support for SSL certficates (both client and server)
* Support for SOCKS proxies
* Ability to automatically restart the client after installing updates
* Ability for plugins to specify 'services' that they provide/require.
* Ability for plugins to export (share) methods with each other
* Improved MDI support
* A more robust DCC plugin
* Moving of the UI to a plugin, allowing for it to be updated separately from the main client

DMDirc 0.6.3m1 is one of our "milestone" releases of the 0.6.3 branch. These milestone releases were a (somewhat failed) attempt to release more often than we have in the past. We periodically decide to stop working on any new features and tidy up the current code-base into a release-ready state to allow users of the stable branch of the client to get some of the new features and fixes we have added sooner than having to wait for a full major release. It's taken us almost a year to get to 0.6.3m1, so imagine how long it'd take if we went straight to 0.6.3 itself (which is approximately two milestones away)!

Users of previous versions of DMDirc should in the coming days be prompted by the automatic updater (if enabled) to update to the latest version of DMDirc. Alternatively, you can visit our <a href="http://www.dmdirc.com/downloads">downloads page</a> to grab the latest version yourself.

With DMDirc 0.6.3m1 released we are now looking forward to our next milestone release, DMDirc 0.6.3m2. So far the issue list for this contains exciting additions such as improved handling of different charsets in channels, additional changes to plugins to try and make them less like black magic, server lists, improved support for netbooks (and other low-resolution systems), and a plethora of other bug fixes and general improvements to make the client nicer to use.

As always, we welcome bug reports and feature requests on our <a href="http://bugs.dmdirc.com/">issue tracker</a>, <a href="irc://irc.quakenet.org/dmdirc">irc channel</a> or as comments on this post. We've also recently launched an official <a href="http://twitter.com/dmdirc">twitter presence</a>. DMDirc 0.6.3m1 continues to be supported on Linux, BSD, Solaris, OS X and Windows, as well as having a standalone Jar file for any other platforms that are not specifically supported.