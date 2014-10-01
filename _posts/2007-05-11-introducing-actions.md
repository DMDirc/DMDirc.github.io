---
layout: post
title: Introducing actions
author: Chris Smith
author_github: csmith
---
'Actions' are one of the major features we've introduced since DMDirc 0.3 was
released.  Actions provide a way for the user to make the client respond to
events in certain ways, and basically provide a subset of the functionality of
scripting in other clients (e.g. mIRC), but in a **much** more user-friendly
manner.

The graphical front-end for actions is still under construction, but the back
end has been fully functional for a week or so. Here's an example of one of the
actions I use:

    trigger=CHANNEL_USERAWAY
    conditions=0
    response=/setnickcolour $source 14

This rather brief action makes the client colour anyone who is set away to a
light grey colour.  (Aside: DMDirc can now be configured to send /who requests
at a certain interval (60 seconds, by default).  This functionality can also be
enabled and disabled per channel; if it's disabled then the CHANNEL_USERAWAY
events won't be triggered unless the user manually sends a who request).  The
'trigger' field specifies which event triggers the action (and may, as we'll see
in a minute, contain more than one event);  the 'conditions' field tells DMDirc
how many conditions there are for the execution of the action - in this case,
none; finally the 'response' field contains commands to be executed (or text to
be sent to the channel) - here it uses a recently-introduced command to set the
colour of a specified nickname.  The "$source" part will be explained shortly.

Here's a slightly more complex action:

    trigger=CHANNEL_MESSAGE|CHANNEL_ACTION
    conditions=1
    
    condition0-arg=2
    condition0-component=STRING_STRING
    condition0-comparison=STRING_CONTAINS
    condition0-target=$nick

    response=/notify $highlightcolour\\n/popup Highlight on $chan: <$source> $message
    format=channelHighlight

Here we have two triggers: CHANNEL_MESSAGE and CHANNEL_ACTION.  If multiple
triggers are specified, they have to be type-compatible (they must have the same
number of potential arguments, which must be of the same classes) - this
restriction, like any others mentioned hereafter, will be transparently enforced
by the graphical editor, so there will be no need for users to worry about this.

Unlike the previous example, this one also specifies a condition.  There are
four parts to a condition: the argument, component, comparison and target.  The
first two determine what the user wants to test - the argument identifies which
object they're interested in (e.g. a Channel or User), and the component
determines which aspect of that they want to test (A channel's name, a user's
modes, etc).  The comparison, rather unsurprisingly, determines what comparison
should be used to compare between the test subject and the user's target.  Some
comparisons for strings, for example, are "starts with", "contains" and
"equals".  The target, as implied, is the data that the subject is compared to.
An action can have any number of conditions, and will only be executed if all of
them pass.

In this example you'll also notice that the 'response' field contains two
commands (both new since 0.3), which are both executed.  It also contains a few
variables.  These are dynamically replaced when the action is being tested and
executed (they can appear both in the response and the targets of any
conditions).  The exact replacements available depend upon the arguments -
$source will be set to the user's nickname if the action was triggered by
someone, and $chan will be set to the channel name if the action is
channel-based, for example.  Others are always present (such as $nick, used in
the condition, which equals your current nickname on the server that the action
is being executed for).  The actions system will also replace any variable with
the same name as a config setting under the "actions" domain - in the example
above, the $highlightcolour variable is replaced by the value of my
'actions.highlightcolour' setting.

Finally, we have the 'formatter' field. This allows the user to control the
default output that is normally associated with an action.  In this example,
it changes the formatter name from 'channelMessage' (the default), to
'channelHighlight', which is a new format I've written which makes the line
show up red.  You can use this to stop default messages entirely (by setting the
formatter to an empty string), or, for example, to display a custom message if a
certain event happens.

You can try out actions in the latest nightly builds.  There is a pack of
actions available [here](http://dmdirc.googlecode.com/files/chancolours.zip)
that provide some basic functionality for changing the colour of channels in the
treeview (joins/parts/quit make the channels turn green, messages make them turn
blue, and highlights turn them red).