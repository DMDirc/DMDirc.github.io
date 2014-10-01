---
layout: post
title: "Development roundup: March 2009"
author: Chris Smith
author_github: csmith
---
March was a reasonably busy month for us, with 160 commits to our central repository.

To begin with, we've made some changes to the way we version our non-stable releases (including nightly builds). Previously, these were versioned using an SVN revision number which lead to problems when we created new branches -- if we created a branch of 0.5 and committed a single change right now, it would have a higher revision number than DMDirc 0.6 or the latest nightly builds; this created lots of problems with updating and plugin version requirements. We now use a description of the git commit for versioning, so our example 0.5 branch would have a version along the lines of 0.5-1-gabcdef1 (which means it's 1 commit after the 0.5 tag, and the commit has an abbreviated object name of abcdef1), while more recent builds would be along the lines of 0.6-801-g123456a. You can plug these version strings straight into almost any git command, or our <a href="http://cgit.dmdirc.com/">git web interface</a> to see exactly what is included in that version.

Following on from the plugin changes described last month, we now allow plugins to define their default settings in their plugin.info files, along with any custom formatters and icons they use. This moves a lot of static information out of the plugins' classes and into more easily altered configuration files. It also allows our addons site to parse this extra information (so we could in the future provide a list of options a plugin accepts, for example). We also updated our plugin build script to be able to cope once again with "friendly" version names, so nightly users will once again see proper version numbers instead of SVN revisions.

We've also made some changes to the way our IRC Parser works, which allowed us to remove over 4,000 lines of code from the package. The change should be transparent to any developers using the IRC Parser in their own projects (aside from the sudden decrease in number of classes!). The change means slightly smaller download sizes for our users, and much easier maintenance for us going forward.

As always we encourage you to try a nightly build and to provide us with any feedback you have, either as a comment here, on our bug tracker, or in #DMDirc on Quakenet (irc.quakenet.org).