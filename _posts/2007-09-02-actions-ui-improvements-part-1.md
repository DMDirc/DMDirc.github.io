---
layout: post
title: Actions UI improvements, part 1
author: Greg Holmes
author_github: greboid
---
One of the best things about DMDirc is, in my opinion, its robust <a href="{% post_url 2007-05-11-introducing-actions %}">actions system</a>. Actions allow you to do virtually anything you can do in a far more complex scripting language, with the benefit of being fairly easy to hide behind a <a href="{% post_url 2007-05-25-actions-now-with-added-ui %}">nice user interface</a>.

Unfortunately, with something as flexible as actions, it's hard to get the UI right the first time around. For DMDirc 0.5 we're introducing a few minor changes which will hopefully make creating and editing actions easier.

The first of our two tweaks is a change in the behaviour of the actions manager. In DMDirc 0.4, to edit an action you need to click the group tab (if it's not selected), move your mouse down to the action, click on it, and then mouse all the way over to the edit button (taking care not to hit any of the six other buttons that line the bottom of the manager). In DMDirc 0.5, you can simply double click on an action to open it in the editor.

The second tweak is a change to the "Trigger" drop down menu in the actions editor. In DMDirc 0.4, this is a long list that only has a vague sense of order (in fact, the order of items in the list is the order we defined them in code, which is generally based more on when they were added, rather than what they're for). In DMDirc 0.5, the triggers list is split into distinct groups, and the triggers within a group are sorted alphabetically, making it much easier to find what you're looking for. Before and after pictures are below, although they don't do the changes much justice, thanks to the rather limited size of the dropdown menu.

![Triggers before](/blog-assets/triggers-before.png)
![Triggers after](/blog-assets/triggers-after.png)

We have several more improvements planned for the actions UI before 0.5 is released, and we also have some brand new UI to make using certain types of actions even easier, which we'll be blogging about later. 