---
layout: post
title: Actions UI improvements, part 2
---
Further to the changes to the actions UI <a href="http://blog.dmdirc.com/2007/09/02/actions-ui-improvements-part-1/">previously mentioned</a>, there are now several more enhancements: one exposing substitutions and two UIs wrapping around actions simplifying common tasks &mdash; aliases and performs.

<!--more-->

<strong>Substitutions</strong>
In 0.4 actions substitutions were somewhat of a black art, whilst they were quite powerful, they were nearly impossible to figure out, so we have added a UI component to both the actions response panel and condition editor making them much more accessible.  When editing either of these you will be able to access a full list of available substitutions, which can be added at the current cursor position either by double clicking or using the button, or added any any position you like by dragging and dropping them.

![Response panel with substitutions list](/blog-assets/substitutions1.png)
![Condition editor with substitutions button](/blog-assets/substitutions2.png)
![Condition editor with substitutions list](/blog-assets/substitutions3.png)

<strong>Aliases</strong>

![Alias manager](/blog-assets/aliasmanager.png)

The alias manager can be found in the settings menu. Once opened aliases can be created for any unknown command (built in commands always take precedence), they can be specified to match a command with any amount of parameters, or a specific number or parameters.

<strong>Perform</strong>

![Perform panel](/blog-assets/perform.png)

To create a new perform you must be connected to the server you wish to create a perform for, switch to the server window and go to settings, then select the perform tab.  Performs can be added to the current server or network and greatly simplify creating performs.