var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":37,"id":13939,"methods":[{"el":35,"sc":5,"sl":32}],"name":"AppErrorEvent","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_121":{"methods":[{"sl":32}],"name":"testOnErrorInfoIncludesException","pass":true,"statements":[{"sl":34}]},"test_42":{"methods":[{"sl":32}],"name":"testLeavesOtherFilesDuringMigration","pass":true,"statements":[{"sl":34}]},"test_435":{"methods":[{"sl":32}],"name":"testOnErrorInfoEmitsAppErrorEvent","pass":true,"statements":[{"sl":34}]},"test_635":{"methods":[{"sl":32}],"name":"testOnErrorInfoIncludesConnectionDetails","pass":true,"statements":[{"sl":34}]},"test_751":{"methods":[{"sl":32}],"name":"testBadActionsLeftOnDisk","pass":true,"statements":[{"sl":34}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [635, 121, 42, 435, 751], [], [635, 121, 42, 435, 751], [], [], []]
