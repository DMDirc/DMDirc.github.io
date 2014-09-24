var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":50,"id":14086,"methods":[{"el":40,"sc":5,"sl":37},{"el":44,"sc":5,"sl":42},{"el":48,"sc":5,"sl":46}],"name":"ServerEvent","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_125":{"methods":[{"sl":42}],"name":"testOnPrivateCTCPRaisesEvent","pass":true,"statements":[{"sl":43}]},"test_665":{"methods":[{"sl":42}],"name":"testOnPrivateCTCPSendsReplyIfEventUnhandled","pass":true,"statements":[{"sl":43}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [125, 665], [125, 665], [], [], [], [], [], [], []]
