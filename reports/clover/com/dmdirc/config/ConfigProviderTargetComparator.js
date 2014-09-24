var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":15721,"methods":[{"el":40,"sc":5,"sl":37}],"name":"ConfigProviderTargetComparator","sl":35}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_115":{"methods":[{"sl":37}],"name":"testRenamesExistingDefaultsFile","pass":true,"statements":[{"sl":39}]},"test_193":{"methods":[{"sl":37}],"name":"testRenamesExistingDefaultsFileWithSuffix","pass":true,"statements":[{"sl":39}]},"test_238":{"methods":[{"sl":37}],"name":"testCreatesDefaultProfile","pass":true,"statements":[{"sl":39}]},"test_303":{"methods":[{"sl":37}],"name":"testExtractsDefaults","pass":true,"statements":[{"sl":39}]},"test_452":{"methods":[{"sl":37}],"name":"testUsesSystemUsernameForProfileNickname","pass":true,"statements":[{"sl":39}]},"test_563":{"methods":[{"sl":37}],"name":"testDoesNotCreateProfileIfOneExists","pass":true,"statements":[{"sl":39}]},"test_700":{"methods":[{"sl":37}],"name":"testLoadsVersionIdentity","pass":true,"statements":[{"sl":39}]},"test_701":{"methods":[{"sl":37}],"name":"testAlwaysUpdatesFormatter","pass":true,"statements":[{"sl":39}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [303, 238, 115, 193, 452, 701, 563, 700], [], [303, 238, 115, 193, 452, 701, 563, 700], [], [], []]
