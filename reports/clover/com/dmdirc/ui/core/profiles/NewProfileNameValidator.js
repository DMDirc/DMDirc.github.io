var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":51,"id":18121,"methods":[{"el":39,"sc":5,"sl":37},{"el":49,"sc":5,"sl":41}],"name":"NewProfileNameValidator","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_135":{"methods":[{"sl":37},{"sl":41}],"name":"testNonDuplicateName","pass":true,"statements":[{"sl":38},{"sl":43},{"sl":44},{"sl":48}]},"test_602":{"methods":[{"sl":37},{"sl":41}],"name":"testSelectedName","pass":true,"statements":[{"sl":38},{"sl":43},{"sl":44},{"sl":45}]},"test_679":{"methods":[{"sl":37},{"sl":41}],"name":"testDuplicateName","pass":true,"statements":[{"sl":38},{"sl":43},{"sl":44},{"sl":45}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [135, 602, 679], [135, 602, 679], [], [], [135, 602, 679], [], [135, 602, 679], [135, 602, 679], [602, 679], [], [], [135], [], [], []]
