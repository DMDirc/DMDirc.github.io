var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":13865,"methods":[{"el":36,"sc":5,"sl":34},{"el":40,"sc":5,"sl":38}],"name":"GroupChatPrefsRequestedEvent","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_643":{"methods":[{"sl":34}],"name":"testGettingServerPrefsRaisesAction","pass":true,"statements":[{"sl":35}]},"test_714":{"methods":[{"sl":34}],"name":"testGettingChannelPrefsRaisesAction","pass":true,"statements":[{"sl":35}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [643, 714], [643, 714], [], [], [], [], [], [], []]
