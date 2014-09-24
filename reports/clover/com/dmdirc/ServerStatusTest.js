var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":64,"id":8891,"methods":[{"el":38,"sc":5,"sl":34},{"el":46,"sc":5,"sl":40},{"el":55,"sc":5,"sl":48},{"el":62,"sc":5,"sl":57}],"name":"ServerStatusTest","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_242":{"methods":[{"sl":48}],"name":"testGetParserIdDifferent","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":54}]},"test_494":{"methods":[{"sl":34}],"name":"testIllegalTransition","pass":true,"statements":[{"sl":36},{"sl":37}]},"test_532":{"methods":[{"sl":40}],"name":"testGetParserIdSame","pass":true,"statements":[{"sl":42},{"sl":43},{"sl":45}]},"test_610":{"methods":[{"sl":57}],"name":"testGetParserIdNull","pass":true,"statements":[{"sl":59},{"sl":61}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [494], [], [494], [494], [], [], [532], [], [532], [532], [], [532], [], [], [242], [], [242], [242], [242], [], [242], [], [], [610], [], [610], [], [610], [], [], []]
