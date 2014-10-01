---
layout: post
title: New Action UIs
author: Greg Holmes
author_github: greboid
---
In DMDirc 0.6, we have made some back-end improvements to the functionality actions groups which allow authors of action packs to specify meta-data such as a description of the pack, and also list the settings available. We obviously wanted to include this new information into the actions UI, and we were aware that the <a href="http://blog.dmdirc.com/2007/05/25/actions-now-with-added-ui/">current actions editor</a> wasn't as user-friendly as it could be, so we took the opportunity to redesign and rewrite the actions UIs.

![New actions manager UI](/blog-assets/dmdirc-new-actionsmanager.png)

As you can see from the screenshot we now show an info blurb, version and author for all action groups that provide them. In the future, we plan to allow users to edit action groups' meta-data from inside the UI. This will make it a lot easier for end users to create action packs and make them available to a wider audience through our <a href="http://addons.dmdirc.com/">addons site</a>, but for the moment only the name of the group is editable. 

Settings for a particular group are now displayed underneath the group and are editable using the same components as the preferences dialog. Exposing these to the end user has added a lot more flexibility to actions and should enable them to be used in much nicer ways.

Finally, in the previous incarnation 'wrapped' actions groups (such as profiles and aliases) were visible but appeared empty. This was rather odd behaviour, so we remedied this and now show the contents of all groups. This allows users to edit the automatically created actions, so they can see how they work or use more advanced features that the wrapper UI doesn't expose.  The new UI is also a lot more pleasing to the eye.

![DMDirc 0.6 Actions Editor](/blog-assets/aed.png)

Of course, the Actions Manager is only half of the actions UI; the Actions Editor has also undergone a revamp in 0.6. In DMDirc 0.5.5, we introduced <a href="http://blog.dmdirc.com/2007/10/25/condition-trees-aka-making-actions-even-more-incomprehensible/">Condition trees</a>, but at the time they were only usable if you manually edited the action's file in your profile, something which we don't expect normal users to do. The new Actions Editor UI exposes condition trees and allows for easy selection of 'AND' and 'OR' trees, which should bring the added power of condition trees to more users.

As with the Actions Manager, we think the new Action Editor is much more user friendly than its previous version. You can, for instance, now see all the information about the action on one screen and edit them easily without having to switch between tabs. Of course, we're always willing to improve further, so if you have any suggestions, please leave a comment!