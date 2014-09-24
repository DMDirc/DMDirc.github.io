var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":80,"id":14579,"methods":[{"el":46,"sc":5,"sl":37},{"el":50,"sc":5,"sl":48},{"el":54,"sc":5,"sl":52},{"el":58,"sc":5,"sl":56},{"el":62,"sc":5,"sl":60},{"el":66,"sc":5,"sl":64},{"el":70,"sc":5,"sl":68},{"el":78,"sc":5,"sl":72}],"name":"ErrorEvent","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_115":{"methods":[{"sl":37}],"name":"testRenamesExistingDefaultsFile","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_116":{"methods":[{"sl":37},{"sl":56}],"name":"testOnErrorInfoEmitsUserErrorEvent","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":57}]},"test_121":{"methods":[{"sl":37},{"sl":52}],"name":"testOnErrorInfoIncludesException","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":53}]},"test_137":{"methods":[{"sl":37}],"name":"testGetUrlPluginWithoutFile","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_180":{"methods":[{"sl":37}],"name":"testGetUrlInvalid","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_193":{"methods":[{"sl":37}],"name":"testRenamesExistingDefaultsFileWithSuffix","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_238":{"methods":[{"sl":37}],"name":"testCreatesDefaultProfile","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_250":{"methods":[{"sl":37}],"name":"testGetUrlForJarFileInvalud","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_274":{"methods":[{"sl":37}],"name":"testGetUrlZipWithoutFile","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_303":{"methods":[{"sl":37}],"name":"testExtractsDefaults","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_382":{"methods":[{"sl":37}],"name":"testGetColourOOB","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_42":{"methods":[{"sl":37}],"name":"testLeavesOtherFilesDuringMigration","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_435":{"methods":[{"sl":37},{"sl":56}],"name":"testOnErrorInfoEmitsAppErrorEvent","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":57}]},"test_452":{"methods":[{"sl":37}],"name":"testUsesSystemUsernameForProfileNickname","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_473":{"methods":[{"sl":37}],"name":"testGetColourHexInvalid","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_563":{"methods":[{"sl":37}],"name":"testDoesNotCreateProfileIfOneExists","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_635":{"methods":[{"sl":37},{"sl":52}],"name":"testOnErrorInfoIncludesConnectionDetails","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":53}]},"test_686":{"methods":[{"sl":37}],"name":"testGetUrlHTTPInvalid","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_691":{"methods":[{"sl":37}],"name":"testGetUrlThemeWithoutFile","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_700":{"methods":[{"sl":37}],"name":"testLoadsVersionIdentity","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_701":{"methods":[{"sl":37}],"name":"testAlwaysUpdatesFormatter","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_712":{"methods":[{"sl":37}],"name":"testGetUrlJarWithoutFile","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_751":{"methods":[{"sl":37}],"name":"testBadActionsLeftOnDisk","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [635, 686, 250, 303, 238, 137, 382, 712, 701, 751, 180, 563, 700, 116, 115, 121, 193, 42, 452, 473, 435, 274, 691], [], [], [], [635, 686, 250, 303, 238, 137, 382, 712, 701, 751, 180, 563, 700, 116, 115, 121, 193, 42, 452, 473, 435, 274, 691], [635, 686, 250, 303, 238, 137, 382, 712, 701, 751, 180, 563, 700, 116, 115, 121, 193, 42, 452, 473, 435, 274, 691], [635, 686, 250, 303, 238, 137, 382, 712, 701, 751, 180, 563, 700, 116, 115, 121, 193, 42, 452, 473, 435, 274, 691], [635, 686, 250, 303, 238, 137, 382, 712, 701, 751, 180, 563, 700, 116, 115, 121, 193, 42, 452, 473, 435, 274, 691], [635, 686, 250, 303, 238, 137, 382, 712, 701, 751, 180, 563, 700, 116, 115, 121, 193, 42, 452, 473, 435, 274, 691], [], [], [], [], [], [], [635, 121], [635, 121], [], [], [116, 435], [116, 435], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
