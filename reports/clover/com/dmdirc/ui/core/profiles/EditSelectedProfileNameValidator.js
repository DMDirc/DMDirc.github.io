var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":55,"id":18140,"methods":[{"el":39,"sc":5,"sl":37},{"el":53,"sc":5,"sl":41}],"name":"EditSelectedProfileNameValidator","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_258":{"methods":[{"sl":37},{"sl":41}],"name":"testDuplicateName","pass":true,"statements":[{"sl":38},{"sl":43},{"sl":44},{"sl":48},{"sl":49}]},"test_512":{"methods":[{"sl":37},{"sl":41}],"name":"testSelectedName","pass":true,"statements":[{"sl":38},{"sl":43},{"sl":44},{"sl":46},{"sl":52}]},"test_749":{"methods":[{"sl":37},{"sl":41}],"name":"testNonDuplicateName","pass":true,"statements":[{"sl":38},{"sl":43},{"sl":44},{"sl":48},{"sl":52}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [258, 749, 512], [258, 749, 512], [], [], [258, 749, 512], [], [258, 749, 512], [258, 749, 512], [], [512], [], [258, 749], [258], [], [], [749, 512], [], [], []]
