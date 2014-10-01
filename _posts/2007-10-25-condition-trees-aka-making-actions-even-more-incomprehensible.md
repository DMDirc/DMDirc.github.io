---
layout: post
title: "Condition Trees (aka: making actions even more incomprehensible)"
---
I've just committed changes to DMDirc that allow you to make use of what I call "condition trees" in actions. These basically allow you to specify how conditions should be evaluated. In DMDirc 0.5.1 (and earlier), all action conditions had to be true in order for the action to be executed. Condition trees allow you to use any combination of AND, OR, NOT and brackets to alter this behaviour.

An example condition tree looks like this: <code>(0&(1|2)&!(1&2))</code>. The numbers refer to the outcome of the conditions (in this case my action has three conditions, which get numbered 0, 1 and 2), and &, |, ! and the brackets have their expected meanings. If you're not too fluent in boolean logic, the condition tree translates roughly as "condition 0 is true, and exactly one of conditions 1 and 2 are true", or "condition 0 and (condition 1 XOR condition 2)" if you want.

At a basic level, condition trees allow you to reduce the number of actions you have (for example: if you want to do something whenever someone mentions your nickname OR when someone starts a message with "!hello", in DMDirc 0.5.1 and below you need two actions with duplicate trigger/response/format settings; in DMDirc 0.6 you will only need one action with a condition tree set). Beyond that, condition trees allow a much closer approximation to 'if' statements in scripting languages, thus enabling extremely complex conditionals without the overhead of a scripting language or the learning curve of one.

<!--more-->

To pre-emptively answer a few questions:

<ul>
 <li>Condition Trees are called Trees because of their implementation, rather than their function. Each ConditionTree object has exactly one operation (and, or, not, noop [used for empty brackets and trees] or var [used to look up the result of a condition]), and zero (in the case of noop or var), one (in the case of not) or two (in the case of and and or) child condition trees.<br>
 <li>The title of this blog post is a reference to a question another developer asked when I was talking about condition trees - it went something like "are you *trying* to make the actions system more incomprehensible?!"; my reply: "no, I'm trying to make it more powerful; incomprehensibility is just a side-effect".<br>
 <li>We will be having a UI for condition trees in 0.6, but we're not entirely sure of the details yet. Stay tuned for details later in the development cycle.<br>
</ul>