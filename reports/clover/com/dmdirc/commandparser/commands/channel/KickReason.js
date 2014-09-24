var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":100,"id":11109,"methods":[{"el":64,"sc":5,"sl":61},{"el":85,"sc":5,"sl":66},{"el":98,"sc":5,"sl":87}],"name":"KickReason","sl":49}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_243":{"methods":[{"sl":66}],"name":"testWithReason","pass":true,"statements":[{"sl":69},{"sl":70},{"sl":75},{"sl":78},{"sl":82}]},"test_484":{"methods":[{"sl":66}],"name":"testWithoutReason","pass":true,"statements":[{"sl":69},{"sl":70},{"sl":75},{"sl":78},{"sl":82}]},"test_544":{"methods":[{"sl":66}],"name":"testUnknown","pass":true,"statements":[{"sl":69},{"sl":70},{"sl":75},{"sl":78},{"sl":79}]},"test_623":{"methods":[{"sl":66}],"name":"testUsage","pass":true,"statements":[{"sl":69},{"sl":70},{"sl":71},{"sl":72}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [484, 544, 243, 623], [], [], [484, 544, 243, 623], [484, 544, 243, 623], [623], [623], [], [], [484, 544, 243], [], [], [484, 544, 243], [544], [], [], [484, 243], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
