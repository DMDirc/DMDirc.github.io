---
layout: post
title: "Development roundup: April 2009"
author: Chris Smith
author_github: csmith
---
April was a fairly slow month for the DMDirc developers. One of our biggest time sinks this month was fixing problems in the UI which appeared after we made some changes to improve thread safety. Throughout the month we had both major and minor issues related to window switching and maximising/restoring, some of which we're only just getting around to fixing now.

There were a couple of new features introduced this month, such as the 'restart needed' dialog which appears when the updater determines that you need to restart the client in order to complete the upgrade process. If you elect to restart using this dialog, the client will close and the DMDirc launcher will automatically reopen the (updated) client.

The windows side of this was done by a new addition to our team, Michael 'Zipplet' Nixon, who has now taken responsibility for all of our code that's native to Windows (primarily the Windows launcher, installer and uninstaller). Previously Michael helped us test DMDirc on Windows, and we're very grateful that he's now joined us as a developer. So far he's helped to clean up a lot of the Windows code, and has fixed several major bugs such as the uninstaller not working.

As always we encourage you to try a nightly build and to provide us with any feedback you have, either as a comment here, on our bug tracker, or in #DMDirc on Quakenet (irc.quakenet.org).