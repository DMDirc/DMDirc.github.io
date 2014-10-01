---
layout: post
title: "Development roundup: May 2009"
author: Chris Smith
author_github: csmith
---
During May the DMDirc developers were gearing up to release DMDirc 0.6.3m1 (which has just been released: see our <a href="http://blog.dmdirc.com/2009/06/28/dmdirc-063m1-released/">previous blog post</a>), the first of our "milestone" releases on the way to 0.6.3 proper. During this month we made 113 commits to our git repository, fixing over 30 issues. Some of the more notable changes this month were:

<ul>
	<li>Default settings changed from being versioned using SVN revision numbers to using Git commit hashes, which fixes a lot of development error and further paves the way for us to drop SVN support entirely,</li>
	<li>Several fixes to the profile manager dialog</li>
	<li>Fixed bug where updater forgets about updates if it checks again, and tidy up some of the updater code</li>
	<li>Many, many fixes to the DCC plugin which means that it now works on a regular basis</li>
	<li>Further work on the preferences dialog (including a fix for the long-standing problem relating to plugin icons under Windows)</li>
</ul>

All of these changes made it into DMDirc 0.6.3m1, which we encourage you to check out. As always, you can leave feedback here, join us in <a href="irc://irc.quakenet.org/dmdirc">#DMDirc on Quakenet</a>, use the feedback functionality in the client, or have a word with <a href="http://twitter.com/dmdirc">@DMDirc</a> on Twitter.