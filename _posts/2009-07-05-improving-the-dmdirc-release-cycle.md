---
layout: post
title: Improving the DMDirc release cycle
author: Shane McCormack
author_github: ShaneMcC
---
Once again, we are looking at improving the DMDirc release cycle. First, a bit of history. When we first started with DMDirc back in 2007 we had very regular releases, but these have slowly started getting longer and longer:

<ul>
	<li>0.1 was released on the 1st of March 2007</li>
	<li>0.2 quickly followed <strong>5 days</strong> later (6th March)</li>
	<li>0.3 was <strong>1 month, 18 days</strong> after that (24th April)</li>
	<li>0.4 followed after <strong>1 month, 18 days</strong> again (11th June)</li>
	<li>0.5 then came <strong>3 months, 15 days</strong> later (26th September)</li>
	<li>0.5.1 was then released as a bug fix a mere <strong>11 days</strong> after that (7th October)</li>
</ul>

So that was six releases in just over 7 months. We were happy to be doing regular releases as we felt it was more likely to keep users with us as the client evolved quickly. However, this pace soon died down and <strong>3 months, 23 days</strong> later (which was at the time the longest we'd gone without a release), with no sign of 0.6 being finished any time soon, we made the decision to release 0.5.5. This was intended as a half-way point between 0.5 and 0.6 to try and keep the releases regular, with the idea that 0.6 would follow in a similar time scale. This was not quite the case, as it took us a further <strong>7 months, 12 days</strong> before 0.6 was released!

Shortly before the release of 0.6 we looked at the time between releases, and took the decision to split our workload for 0.7 into 3 separate parts (as described <a href="http://blog.dmdirc.com/2008/07/30/looking-ahead-to-dmdirc-07/">here</a>) in order to try and bring the release time down to a more reasonable time scale. After some time it became obvious from the amount of outstanding issues for 0.6.3 that this again wouldn't work, as six months in we still had a large number of major features outstanding. We therefore decided once again to split the release further into a set of "milestone" releases — 0.6.3m1 (which we've just released), 0.6.3m2 (up next) and then probably 0.6.3 proper. These milestone releases were supposed to be point in time where we thought the client was in a good state that we would finish anything we were working on, tidy up the code and release.

Well, <strong>9 months, 16 days</strong> after the release of 0.6 we released the long-awaited version 0.6.3m1. We once again took a hard look at this and have come to the conclusion that this simply isn't acceptable, despite two attempts at breaking the release down it still took us 9 months to do what essentially boils down to 1/9th of the 0.7 release we had originally planned (assuming that 0.6.6 and 0.7 will also be split into two milestone releases).

So now we are going to introduce yet another change to our release cycle. We are going to continue with 0.6.3, 0.6.6 and 0.7 as separate release targets, but instead tweak how we handle milestone releases. Currently we decide to release a milestone randomly when we feel that the client is stable, instead we are going to try and stick to a reasonably fixed release cycle of <strong>4 months</strong> in between releases. Approximately 3 months after the last release we are going to start the process of preparing for a milestone release. This will entail a feature freeze and the bumping of any non-essential issues back to the next milestone. Following this we will finish any currently outstanding issues (or bump them if there is still too much to do), a reasonably quick QA cycle (during which we open up the UNSTABLE updater channel to allow for testing of the upcoming release) and then release after the 4th month and repeat.

So with this new release cycle we hope to go back to our original faster-paced release strategy without losing any of the quality we like in a release, and should be looking at releasing the next milestone on or around the <strong>1st of November</strong>, so watch out during October for news of the pending release of 0.6.3m2!