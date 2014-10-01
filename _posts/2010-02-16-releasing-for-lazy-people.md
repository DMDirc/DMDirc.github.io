---
layout: post
title: Releasing for lazy people
---
In preparation for DMDirc 0.6.3, we've just finished enhancing our release procedures considerably. Previously, a typical set of steps needed to release a version of DMDirc would be:

<ol>
	<li>Create a new tag in a local Git repository</li>
	<li>Push the new tag</li>
	<li>Run the relevant ant task to create an installer</li>
	<li>Upload the installers and jar file to the correct place</li>
	<li>Go through each plugin and upload each one (one at a time) to the <a href="http://addons.dmdirc.com/">addons site</a></li>
	<li>Find or clone a copy of the main website repository</li>
	<li>Update a PHP file to contain details of each supported OS and each download and its size, etc</li>
	<li>Commit the website changes</li>
	<li>Push the website changes</li>
</ol>

Obviously, this process was distinctly not enjoyable. A lot of it now lends itself quite well to being automated, but we hadn't tried this in the past for various reasons (such as our use of SVN prior to Git, and the huge length of time between releases prior to the introduction of our fixed-length release cycle). Now we have the tools and the motivation (we don't want to be doing that process every four months for each alpha, beta, release candidate and stable version!), we set about automating the entire procedure.

We already had a set of scripts which monitored our Git repositories for new commits, and did various useful things such as announcing the commits to IRC and updating our bug tracker. Some extra code was introduced for commits to the client repository that checks if the commit looks like a release, determines which updater channel it's for (alpha, beta and rcs are unstable, plain versions are stable), and then builds the relevant installers. Once the installer's built, it copies or uploads the files as appropriate, automatically updates the website as needed and commits and pushes the changes, and then automatically submits every plugin to the addons site. This means our release process is now:

<ol>
	<li>Create a new tag in a local Git repository</li>
	<li>Push the new tag</li>
</ol>

Which I'm sure you'll agree is decidedly simpler. Of course, we still have to announce the release to the world. Anyone wanting to develop an artificial intelligence to automatically create changelogs, release notes, blog posts, news stories and tweets for each release should get in touch!