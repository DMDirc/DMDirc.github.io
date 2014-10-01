---
layout: post
title: Intelligent channel names
---
As you can probably gather from DMDirc's tagline, we like making DMDirc act intelligently. One of our latest set of changes revolves around intelligent handling of channel names. Say you join a channel and a friendly person advises you to try some others out for size:

<code>&lt;Person&gt; Hey, you, why don't you join #channel2 (and maybe #channel3)?</code>

DMDirc now applies the same intelligent linking algorithms we use for URLs to channel names, so we can intelligently figure out what was probably meant to be part of the channel name, and what was punctuation following it. With our new "<code>stylechannels</code>" option enabled, that message will show up as:

<code>&lt;Person&gt; Hey, you, why don't you join <span style="color: green;text-decoration: underline">#channel2</span> (and maybe <span style="color: green;text-decoration: underline">#channel3</span>)?</code>

As you can see, we now correctly realise that the ")" and "?" at the end of #channel3 probably weren't intended to be part of the channel name. And with <code>stylechannels</code> enabled you'll be able to see exactly where you're going to end up before clicking.

But we're not done yet! What if you're more of a keyboard aficionado than a mouse lover? You want to use the /join command, but don't think there's an easy way to get that channel name that was just mentioned without copying it by hand or resorting to the mouse? Think again - DMDirc now has intelligent tab completion for its /join command. This keeps an eye out for any linked channel names, and suggests any you're not already in when you hit tab! So after our friendly user suggests two channels to us, we can type:

<code>/join <em>&lt;tab&gt;</em></code>

And DMDirc will suggest <code>#channel2</code> and <code>#channel3</code>. What's more, if you decide you want to join multiple channels, recent upgrades to our tab completer allow the join command to offer useful suggestions if you comma-separate the channels:

<code>/join #help,<em>&lt;tab&gt;</em></code>

Will offer the suggestions <code>#help,#channel2</code> and <code>#help,#channel3</code>.

All of these features will be available in DMDirc 0.6.4, which should be out at the start of July. If you can't wait that long, you can try a <a href="http://www.dmdirc.com/nightly">nightly build</a>. Think of any more ways we can make DMDirc intelligent? Leave a comment, poke <a href="http://twitter.com/DMDirc">@DMDirc</a> on Twitter, or you can of course join us <a href="irc://irc.quakenet.org/DMDirc">on IRC</a>.