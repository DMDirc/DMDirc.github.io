---
layout: post
title: "Actions: now with added UI"
author: Chris Smith
author_github: csmith
---
Following on from my previous post, the front-end for actions is just about
complete. Here are some preview images:

![Actions Manager dialog](/blog-assets/dmdirc-actions1.png)

The actions manager lists all known actions, sorted into groups (which
correspond to directories on the disk).

![Editing an action: tab 1](/blog-assets/dmdirc-actions2.png)

The "general" tab of the actions editor allows you to select which triggers the
action responds to, as well as specifying its friendly name.

![Editing an action: tab 2](/blog-assets/dmdirc-actions-conditions1.png)

The "conditions" tab allows you to specify conditions for the action. The pencil
icon brings up the condition editor for that condition (see next image), while
the cross button deletes the corresponding condition.

![Editing an action: conditions](/blog-assets/dmdirc-actions-conditions2.png)

The conditions editor allows you to add or modify an action condition. Once you
select an argument, the components list is updated to contain only the
applicable components, and when you select a component the comparison list is
updated similarly.

![Editing an action: tab 3](/blog-assets/dmdirc-actions3.png)

Finally, the response tab allows you to specify how the client should respond if
this action is triggered. The commands are executed as though you typed them in
the window that triggered the event.