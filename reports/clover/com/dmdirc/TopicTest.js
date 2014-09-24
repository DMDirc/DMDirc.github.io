var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":55,"id":8906,"methods":[{"el":35,"sc":5,"sl":31},{"el":41,"sc":5,"sl":37},{"el":47,"sc":5,"sl":43},{"el":53,"sc":5,"sl":49}],"name":"TopicTest","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_236":{"methods":[{"sl":31}],"name":"testGetClient","pass":true,"statements":[{"sl":33},{"sl":34}]},"test_40":{"methods":[{"sl":49}],"name":"testToString","pass":true,"statements":[{"sl":51},{"sl":52}]},"test_41":{"methods":[{"sl":43}],"name":"testGetTopic","pass":true,"statements":[{"sl":45},{"sl":46}]},"test_645":{"methods":[{"sl":37}],"name":"testGetTime","pass":true,"statements":[{"sl":39},{"sl":40}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [236], [], [236], [236], [], [], [645], [], [645], [645], [], [], [41], [], [41], [41], [], [], [40], [], [40], [40], [], [], []]
