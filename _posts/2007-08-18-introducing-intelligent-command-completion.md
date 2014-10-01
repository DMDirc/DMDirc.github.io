---
layout: post
title: Introducing intelligent command completion
author: Chris Smith
author_github: csmith
---
One of the first new features introduced after the release of DMDirc 0.4 was the
intelligent command completion system. This allows commands to tell the tab
completer about their arguments. The best way to explain this is with a few
examples:

The **/ctcp** command: type `/ctcp someone <tab><tab>` and instead
of getting a standard tab-completable targets (such as command names, channel
names, etc), you get the following:

    00:03:18 | Multiple possibilities: VERSION, ACTION, USERINFO, CLIENTINFO, PING, FINGER, SOURCE, TIME

The **/loadplugin** and **/reloadplugin** commands allow you to tab complete the
class names of relevant plugins.

One last example: the **/set** command allows you to tab complete both the
domain and option names, so instead of `/set general showcolourdialog`, you can
type `/set g<tab> sh<tab><tab>`.

This may not seem like much, but once you get used to using it, it's hard to
cope without it!