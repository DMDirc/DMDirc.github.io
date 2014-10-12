---
layout: post
title: "Development roundup: January 2009"
author: Chris Smith
author_github: csmith
---
This is the first post in what will hopefully be a regular series of updates from the DMDirc developers, detailing what we've been up to on a month-by-month basis. Because of DMDirc's quite long release schedule, we have found that our communication on the blog is done in small bursts when a release is nearly ready, with very long gaps in between; hopefully these updates will help bridge that gap.

January was a fairly slow month for us, with only 57 commits made to our collective git repositories. We have, however, made progress in a variety of areas, including a major refactoring of the command manager to allow greater flexibility to command authors, and further improvements to our new-look preferences dialog.

Issues marked as fixed this month:

 * <a href="http://bugs.dmdirc.com/view/0001812">0001812: Expanding and collapsing treeview makes nicklist a stupid size
 * <a href="http://bugs.dmdirc.com/view/0001874">0001874: Ctrl+c doesn't work as expected with find bar open
 * <a href="http://bugs.dmdirc.com/view/0002017">0002017: Can load windows np sources on linux
 * <a href="http://bugs.dmdirc.com/view/0002043">0002043: The arrows for collapsing/expanding the treeview/nicklist are ugly
 * <a href="http://bugs.dmdirc.com/view/0002056">0002056: Line length calculations use char length not byte length
 * <a href="http://bugs.dmdirc.com/view/0002057">0002057: java.lang.NullPointerException — Query.getMaxLineLength(Query.java:167)
 * <a href="http://bugs.dmdirc.com/view/0002066">0002066: text can be sent twice by very quick repetitions of the enter key (and im sure awful pcs!)
 * <a href="http://bugs.dmdirc.com/view/0002067">0002067: alias dialog edit panel not 100% width
 * <a href="http://bugs.dmdirc.com/view/0002070">0002070: UI line splitting needs to use bytes not chars
 * <a href="http://bugs.dmdirc.com/view/0002071">0002071: java.lang.StringIndexOutOfBoundsException: String index out of range: 460</a>

February is already shaping up to be a much busier month, with the number of commits made almost double that of January already. Major changes so far include the finishing touches of the reworked preferences dialog, a huge change in the way that the user interface interfaces with the client, and a number of changes to the plugin system. Details of all of these will be in next month's roundup.

You can try out the latest developments in DMDirc before the next release by using nightly builds, available <a href="http://www.dmdirc.com/nightly">from the main website</a>. Be warned that nightly builds aren't tested extensively, and may be quite horribly broken. Finally, as always, we're happy to receive feedback or to help out with problems; the easiest way to find us is to drop by <a href="irc://irc.quakenet.org/dmdirc">#DMDirc on Quakenet</a> (which you can get to easily by using the 'Help' → 'Join dev channel' menu option in DMDirc).