---
layout: post
title: SVN Deprecation
author: Shane McCormack
author_github: ShaneMcC
---
Despite using Git for all of our DMDirc development work for over a year, we have continued to maintain a copy of the entire codebase in an SVN repository. This was primarily to facilitate some of our automated scripts, which we've finally finished migrating to use Git. This means that we no longer have any need to keep the SVN Repository up to date, and will stop doing so after the release of 0.6.3 in early March.

Anyone who is still using an SVN checkout should read <a href="http://www.dmdirc.com/git">http://www.dmdirc.com/git</a> and switch to using Git, which brings numerous advantages and makes contributing back to DMDirc easier thanks to <a href="{% post_url 2009-11-26-introducing-gerrit %}">Gerrit</a>.

If you have any questions about DMDirc development, feel free to join us in #DMDirc on Quakenet.