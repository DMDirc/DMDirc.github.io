---
layout: post
title: DMDirc 0.6.3 released
author: Chris Smith
author_github: csmith
---
We've just released DMDirc 0.6.3, which is our first release in 2010. From a development point of view, this release also marks the <a href="{% post_url 2010-01-03-svn-deprecation %}">end of our support for Subversion</a>. An overview of the changes included follows:

<div class="nohomepage" style="clear: both;">&nbsp;</div>

<h3>Window menu enhancement</h3>

![Window menu](/blog-assets/windowmenu.png)

The window menu now groups windows by server, making it much easier to quickly access a specific window (especially if you're connected to lots of different servers!).

<div class="nohomepage" style="clear: both;">&nbsp;</div>

<h3>Addon browser</h3>

![Addon browser](/blog-assets/addonbrowser.png)

The addon browser was previously available in 0.6.3m2, but was not properly functioning in that release. DMDirc 0.6.3 presents a functioning addon browser, allowing you to browse through plugins, themes and action packs from within DMDirc, and download and install them with one click.

<div class="nohomepage" style="clear: both;">&nbsp;</div>

<h3>Backgrounds</h3>

![DMDirc logo as background in a channel](/blog-assets/background.png)

You can now specify background images for both the textpane and the main 'desktop' area.

<div class="nohomepage" style="clear: both;">&nbsp;</div>

<h3>Topic improvements</h3>

![Topics](/blog-assets/topics.png)

A brand new topic bar now adorns the top of channel windows, allowing you to easily see the current topic at a glance, and edit it right from the channel. The topic history display in the channel settings window has also been completely revamped, showing much more detail than it did previously.

<div class="nohomepage" style="clear: both;">&nbsp;</div>

<h3>Improved URL and channel linking</h3>

![Links](/blog-assets/links.png)

DMDirc's already intelligent URL handling has been improved further, now allowing some extra characters to ensure compatibility with non-standard URLs. We've also applied the same techniques we use for intelligent URL linking to channel name links, so trailing punctuation and brackets will no longer get in your way when trying to join a channel.

<div class="nohomepage" style="clear: both;">&nbsp;</div>

<h3>DCC fixes</h3>

![DCC plugin](/blog-assets/dcc.png)

We've fixed a whole raft of bugs in the DCC plugin, which should make it work much more reliably in more circumstances than ever before. We've also fixed a particularly silly bug which rate limited all DCCs to 10KB/s in past versions.

<div class="nohomepage" style="clear: both;">&nbsp;</div>

As always, we welcome bug reports and feature requests on our <a href="http://bugs.dmdirc.com/">issue tracker</a>, <a href="irc://irc.quakenet.org/dmdirc">irc channel</a> or as comments on this post. We will also respond to mentions on <a href="http://twitter.com/dmdirc">twitter</a>. DMDirc 0.6.3 continues to be supported on Linux, BSD, Solaris, OS X and Windows, as well as having a standalone Jar file for any other java-capable platforms that are not specifically supported.