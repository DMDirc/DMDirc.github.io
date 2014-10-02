---
layout: post
title: Introducing Gerrit
author: Shane McCormack
author_github: ShaneMcC
---
For the past year, the ever-growing DMDirc code base has been managed using the Git version control system.  We still mirror our code to an SVN repository, and a couple of our automated tools still use the SVN version of things, but we're slowly and surely modifying, upgrading or scrapping these in favour of Git-based solutions.

Recently we began a trial of using <a href="http://gerrit.dmdirc.com/">Gerrit</a> to manage commits made to the main DMDirc repositories for the client and the parser. Gerrit is a code review tool, which developers submit their changes to (instead of pushing them directly to the Git repositories); other developers can then review the changes, test them, and leave feedback, before ultimately approving or rejecting the change. Only once a change has been approved is it allowed to go into the repository. 

This has helped us greatly improve the quality of the code that makes it into the client. Another advantage to using Gerrit is that it now allows us to open up the repositories a bit more and allow third-party contributions with much more ease than before: it is now possible for anybody to sign up to Gerrit and begin committing to DMDirc right away! We even have a guide on our <a href="http://wiki.dmdirc.com/documentation:developers:git#submitting_changes_for_review">Git wiki page</a> detailing how to do just that.

If you would like to contribute to DMDirc, either by committing (via Gerrit!) or in other ways, we suggest paying a visit to #DMDirc on either <a href="irc://irc.quakenet.org/DMDirc">Quakenet</a>, <a href="irc://irc.freenode.net/DMDirc">Freenode</a>, <a href="irc://irc.oftc.net/DMDirc">OTFC</a>, <a href="irc://irc.coldfront.net/DMDirc">Coldfront</a> or <a href="irc://irc.chatspike.net/DMDirc">Chatspike</a>! (Don't worry: we have <a href="http://addons.dmdirc.com/addon/50">a system</a> in place to link all the channels together!)