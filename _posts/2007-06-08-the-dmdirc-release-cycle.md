---
layout: post
title: The DMDirc release cycle
---
As we're preparing to release 0.4, I thought I'd take the time to describe how the DMDirc release cycle works.

Following a release, we start working on some of the new features we have scheduled for the next milestone. As I'm writing this (a day or two before the 0.4 release, at a guess), there are 23 issues in our tracker targeted for 0.5, some of them being fairly big projects (such as Theme support), and some of them being small things we decided to push back from 0.4 (such as colour codes still being shown when you highlight text). While we're doing this we'll probably come across bugs in the previous release, cause more bugs while implementing new features, and find some poorly designed aspects of the client, so we'll fix and refactor as appropriate.

Once all the features for a milestone are implemented, we start a 'feature freeze', during which time no one is allowed to commit new features, just bug fixes.  This is to prevent the accidental introduction of more bugs, and to ensure that we can release without having a half finished feature somewhere.  During the feature freeze all the developers upgrade to the latest build of the client in an effort to try and find bugs that occur during general use.  We also use this time to prepare supporting material for the release, such as the changelog and the release notes.  For 0.4 we're also working on the [addons site](http://addons.dmdirc.com/), which we hope to have in basic working order by the time we make a release.

Finally, when all outstanding bugs have been fixed, and we've had a few days (or more) using the latest build, we create an SVN tag for the release, so a copy of the source tree is preserved and easily accessible if we ever need it in the future, and alter a couple of constants in the Main class to reflect the new version number and update status.  We then build a JAR file for the project, copy the standard shell and batch scripts, and add the release notes. The collection of files is then zipped and uploaded to our project page (from 0.5 onwards we will hopefully have native installers, so no more zip files).

Once this is done and the website and project pages are updated to reflect the release, we start the cycle again.