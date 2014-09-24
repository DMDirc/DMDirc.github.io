var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":14641,"methods":[{"el":36,"sc":5,"sl":34},{"el":40,"sc":5,"sl":38}],"name":"ActionEvent","sl":30}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_323":{"methods":[{"sl":34}],"name":"testSetName","pass":true,"statements":[{"sl":35}]},"test_397":{"methods":[{"sl":34}],"name":"testSetGroup","pass":true,"statements":[{"sl":35}]},"test_624":{"methods":[{"sl":34}],"name":"testSave","pass":true,"statements":[{"sl":35}]},"test_731":{"methods":[{"sl":34}],"name":"testDelete","pass":true,"statements":[{"sl":35}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [624, 397, 323, 731], [624, 397, 323, 731], [], [], [], [], [], [], []]
