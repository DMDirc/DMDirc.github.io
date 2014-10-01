---
layout: post
title: Introducing intelligent command completion
---
One of the first new features introduced after the release of DMDirc 0.4 was the intelligent command completion system. This allows commands to tell the tab completer about their arguments. The best way to explain this is with a few examples:

The <strong>/ctcp</strong> command: type <code>/ctcp someone &lt;tab&gt;&lt;tab&gt;</code>, and instead of getting a standard tab-completable targets (such as command names, channel names, etc), you get the following:

<blockquote>00:03:18 | Multiple possibilities: VERSION, ACTION, USERINFO, CLIENTINFO, PING, FINGER, SOURCE, TIME</blockquote>

The <strong>/loadplugin</strong> and <strong>/reloadplugin</strong> commands allow you to tab complete the class names of relevant plugins.

One last example: the <strong>/set</strong> command allows you to tab complete both the domain and option names, so instead of <code>/set general showcolourdialog</code>, you can type <code>/set g&lt;tab&gt; sh&lt;tab&gt;c&lt;tab&gt;</code>.

This may not seem like much, but once you get used to using it, it's hard to cope without it!