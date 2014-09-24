var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":70,"id":11134,"methods":[{"el":59,"sc":5,"sl":56},{"el":68,"sc":5,"sl":61}],"name":"Part","sl":44}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":61}],"name":"testWithoutArgs","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":67}]},"test_172":{"methods":[{"sl":61}],"name":"testWithArgs","pass":true,"statements":[{"sl":64},{"sl":65},{"sl":67}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [102, 172], [], [], [102, 172], [102, 172], [], [102, 172], [], [], []]
