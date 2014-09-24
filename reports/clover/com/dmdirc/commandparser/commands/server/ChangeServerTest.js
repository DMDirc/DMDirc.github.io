var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":123,"id":16532,"methods":[{"el":65,"sc":5,"sl":60},{"el":73,"sc":5,"sl":67},{"el":81,"sc":5,"sl":75},{"el":89,"sc":5,"sl":83},{"el":97,"sc":5,"sl":91},{"el":105,"sc":5,"sl":99},{"el":113,"sc":5,"sl":107},{"el":121,"sc":5,"sl":115}],"name":"ChangeServerTest","sl":51}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_164":{"methods":[{"sl":67}],"name":"testUsageNoArgs","pass":true,"statements":[{"sl":69},{"sl":72}]},"test_225":{"methods":[{"sl":99}],"name":"testExecuteBasic","pass":true,"statements":[{"sl":101},{"sl":104}]},"test_278":{"methods":[{"sl":91}],"name":"testOutOfRangePort2","pass":true,"statements":[{"sl":93},{"sl":96}]},"test_35":{"methods":[{"sl":83}],"name":"testOutOfRangePort1","pass":true,"statements":[{"sl":85},{"sl":88}]},"test_481":{"methods":[{"sl":107}],"name":"testExecuteNoPort","pass":true,"statements":[{"sl":109},{"sl":112}]},"test_632":{"methods":[{"sl":75}],"name":"testInvalidPort","pass":true,"statements":[{"sl":77},{"sl":80}]},"test_638":{"methods":[{"sl":115}],"name":"testExecuteComplex","pass":true,"statements":[{"sl":117},{"sl":120}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [164], [], [164], [], [], [164], [], [], [632], [], [632], [], [], [632], [], [], [35], [], [35], [], [], [35], [], [], [278], [], [278], [], [], [278], [], [], [225], [], [225], [], [], [225], [], [], [481], [], [481], [], [], [481], [], [], [638], [], [638], [], [], [638], [], [], []]
