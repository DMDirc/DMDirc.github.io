var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":183,"id":31003,"methods":[{"el":80,"sc":5,"sl":68},{"el":102,"sc":5,"sl":82},{"el":115,"sc":5,"sl":112},{"el":128,"sc":5,"sl":125},{"el":141,"sc":5,"sl":139},{"el":156,"sc":5,"sl":148},{"el":181,"sc":5,"sl":158}],"name":"Debug","sl":51}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1149":{"methods":[{"sl":68},{"sl":82}],"name":"testInvalidArg","pass":true,"statements":[{"sl":72},{"sl":74},{"sl":75},{"sl":77},{"sl":85},{"sl":89},{"sl":90},{"sl":91}]},"test_1150":{"methods":[{"sl":68},{"sl":82}],"name":"testCommandWithArgs","pass":true,"statements":[{"sl":72},{"sl":74},{"sl":75},{"sl":77},{"sl":78},{"sl":85},{"sl":89},{"sl":90},{"sl":94},{"sl":99}]},"test_1151":{"methods":[{"sl":68},{"sl":82}],"name":"testCommandNoArgs","pass":true,"statements":[{"sl":72},{"sl":74},{"sl":75},{"sl":77},{"sl":78},{"sl":85},{"sl":89},{"sl":90},{"sl":94},{"sl":99}]},"test_1152":{"methods":[{"sl":68},{"sl":82}],"name":"testNoArgs","pass":true,"statements":[{"sl":72},{"sl":74},{"sl":75},{"sl":77},{"sl":85},{"sl":86}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1151, 1150, 1149, 1152], [], [], [], [1151, 1150, 1149, 1152], [], [1151, 1150, 1149, 1152], [1151, 1150, 1149, 1152], [], [1151, 1150, 1149, 1152], [1151, 1150], [], [], [], [1151, 1150, 1149, 1152], [], [], [1151, 1150, 1149, 1152], [1152], [], [], [1151, 1150, 1149], [1151, 1150, 1149], [1149], [], [], [1151, 1150], [], [], [], [], [1151, 1150], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
