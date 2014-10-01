---
layout: post
title: DMDirc 0.6.3m2 Released
---
At the start of the month we quietly released DMDirc 0.6.3m2 as part of our new <a href="http://blog.dmdirc.com/2009/07/05/improving-the-dmdirc-release-cycle/">fixed release cycle</a>.

DMDirc 0.6.3m2 is the second milestone release since 0.6.1, and the first release we've made as part of the fixed cycle. It contains a large number of bug fixes and minor improvements.

As this is the first release as part of the fixed release cycle, we weren't used to the limited timescale between releases and as such our usual 'quiet' period between releases had a much larger effect than it does normally. This means that we didn't get as many features into this release as we would have liked, but we still managed to squeeze a few in:

<div class="nohomepage" style="clear: both;">&nbsp;</div>
<img src="http://www.dmdirc.com/res/docs/0.6.3m2/textpane.png" class="alignleft nohomepage">
<h3>Textpane font settings</h3>

One of our most requested improvements - you can now set both the font name and size of the text displayed in DMDirc's textpane. The options can be set globally, per-server or per-channel as usual.

<div class="nohomepage" style="clear: both;">&nbsp;</div>
<img src="http://www.dmdirc.com/res/docs/0.6.3m2/twitter.png" class="alignleft nohomepage">
<h3>Alternate parsers (Twitter support)</h3>

DMDirc can now support different parsers in addition to our previous IRC parser. This means better or alternative IRC parsers can be developed in the future, or we can develop parsers to interact with completely different systems. As a proof of concept, we've developed a Twitter parser which allows you to read your Twitter news feed and post status updates direct from DMDirc!
<div class="nohomepage" style="clear: both;">&nbsp;</div>
<img src="http://www.dmdirc.com/res/docs/0.6.3m2/servernames.png" class="alignleft nohomepage">
<h3>Configurable server names</h3>

You can now configure how DMDirc displays server names in the treeview and the titlebar. This means you can (for example) show your nickname along with the server name (useful if you often connect to the same server twice as different users), or show the network name instead of the server address (in case you use a bouncer to connect to multiple networks).

<div class="nohomepage" style="clear: both;">&nbsp;</div>
<img src="http://www.dmdirc.com/res/docs/0.6.3m2/licensepanel.png" class="alignleft nohomepage">
<h3>License panel</h3>

We've also tidied up the 'License' panel in the about dialog, to make it much clearer which components are covered by which license. This should make it easier for anyone interested in modifying DMDirc or reusing parts of it to see where they stand.

<div class="nohomepage" style="clear: both;">&nbsp;</div>
As we're now committed to releasing on a fixed schedule this will be the last 'milestone' release, and for future releases we'll just add to the minor version number until we've implemented the features targeted for the next major release. This means the next release will be 0.6.3, and any further releases before the 0.7 feature set is complete will be 0.6.4, 0.6.5, etc

As always, we welcome bug reports and feature requests on our <a href="http://bugs.dmdirc.com/">issue tracker</a>, <a href="irc://irc.quakenet.org/dmdirc">irc channel</a> or as comments on this post. We will also respond to mentions on <a href="http://twitter.com/dmdirc">twitter</a>. DMDirc 0.6.3m2 continues to be supported on Linux, BSD, Solaris, OS X and Windows, as well as having a standalone Jar file for any other java-capable platforms that are not specifically supported.