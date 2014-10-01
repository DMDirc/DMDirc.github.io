---
layout: post
title: "DMDirc 0.6: Preferences revamp"
---
The latest major change we've added to the 0.6 branch is a revamp of the preferences system. The original purpose of the revamp was to shift a large amount of logic out of the UI and into the main client core, so that if/when we have additional user interfaces written, they don't have to duplicate several hundred lines of code to produce a preferences dialog.

We took this opportunity to move plugin configuration settings into the main preferences dialog. This makes the configuration options for individual plugins much easier to find, and reduces the amount of clutter in the Settings menu somewhat. Here's a screenshot of the new prefs dialog — you can see the configuration categories for all of the plugins I have installed, as well as the plugin manager itself in its newly integrated state:

![New preferences dialog](/blog-assets/dmdirc-newprefs1.png)

We still have some more improvements planned for the preferences dialog in 0.6, including a new component to allow easier editing of duration fields (no more entering times in milliseconds!), and better management of optional colour fields.

In other news, DMDirc 0.5.5's release is drawing very close. DMDirc 0.5.5 has been the most tested release to date, and we're working out the last few problems now. You can view the current <a href="http://code.google.com/p/dmdirc/wiki/ChangelogNoughtPointFivePointFive">changelog</a> or the draft <a href="http://code.google.com/p/dmdirc/wiki/GuideToNoughtPointFivePointFive">release notes</a> if you're interested in the changes since DMDirc 0.5.1. If you want to try it for yourself, or want to help us test it, you can try an <a href="http://www.dmdirc.com/en/unstablereleases">unstable release</a> of DMDirc.