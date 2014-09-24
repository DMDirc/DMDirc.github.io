var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":2487,"methods":[{"el":35,"sc":5,"sl":32},{"el":40,"sc":5,"sl":37}],"name":"CoreActionTypeTest","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_337":{"methods":[{"sl":37}],"name":"testMetaType","pass":true,"statements":[{"sl":39}]},"test_344":{"methods":[{"sl":32}],"name":"testGetName","pass":true,"statements":[{"sl":34}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [344], [], [344], [], [], [337], [], [337], [], [], []]
