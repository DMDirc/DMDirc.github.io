---
layout: post
title: DMDirc development
author: Greg Holmes
author_github: greboid
---
Even though we do still actively use the client day to day it has come to the point where we feel we need to make some fairly major changes to the client in order to keep this viable.  The current codebase is aging, we started development on it in 2007 and just about everything about it is now outdated, combined with us all growing as devs (some way more than others... I'm looking at you Chris) and after some internal discussions, we decided the only way forward would be to start again.

The new client will be written in Kotlin (a nice improvement on Java, but still enabling us to leverage our existing knowlege and community) and JavaFX (a big improvement on Swing, but still keeping things cross platform) and I think most controversially, we decided we would also start the parser again making use of Kotlin language features and some modern development approaches.  

We did have a fairly major case of Not Invented Here syndrome and we're trying to use best in class solutions available from third parties wherever available, in this vein, we decided to make use of [install4j](https://www.ej-technologies.com/products/install4j/overview.html) which nicely covers ensuring java exists, installing the client, updating the client and getting the client running, they also very generously provide free licenses to open source projects across all our previously supported platforms.

We're busy working on an initial release, but you're welcome to [Check it out](https://github.com/DMDirc/dmdirc3) and give us some feedback on what you feel is missing and needed to make this a viable client again, hopefully we'll post some more entries soon on how we're developing and get a new version released in due course.
