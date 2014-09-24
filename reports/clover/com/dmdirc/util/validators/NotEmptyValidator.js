var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":46,"id":20653,"methods":[{"el":44,"sc":5,"sl":37}],"name":"NotEmptyValidator","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_784":{"methods":[{"sl":37}],"name":"testValidate","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":42}]},"test_888":{"methods":[{"sl":37}],"name":"testNullValue","pass":true,"statements":[{"sl":39},{"sl":40}]},"test_911":{"methods":[{"sl":37}],"name":"testValidate","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":42}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [784, 888, 911], [], [784, 888, 911], [784, 888, 911], [], [784, 911], [], [], [], []]
