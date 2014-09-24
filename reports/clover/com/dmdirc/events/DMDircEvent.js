var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":55,"id":13919,"methods":[{"el":42,"sc":5,"sl":40},{"el":49,"sc":5,"sl":47},{"el":53,"sc":5,"sl":51}],"name":"DMDircEvent","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_115":{"methods":[{"sl":40}],"name":"testRenamesExistingDefaultsFile","pass":true,"statements":[{"sl":41}]},"test_116":{"methods":[{"sl":40}],"name":"testOnErrorInfoEmitsUserErrorEvent","pass":true,"statements":[{"sl":41}]},"test_121":{"methods":[{"sl":40}],"name":"testOnErrorInfoIncludesException","pass":true,"statements":[{"sl":41}]},"test_125":{"methods":[{"sl":47}],"name":"testOnPrivateCTCPRaisesEvent","pass":true,"statements":[{"sl":48}]},"test_137":{"methods":[{"sl":40}],"name":"testGetUrlPluginWithoutFile","pass":true,"statements":[{"sl":41}]},"test_171":{"methods":[{"sl":47}],"name":"testOpenAction","pass":true,"statements":[{"sl":48}]},"test_180":{"methods":[{"sl":40}],"name":"testGetUrlInvalid","pass":true,"statements":[{"sl":41}]},"test_193":{"methods":[{"sl":40}],"name":"testRenamesExistingDefaultsFileWithSuffix","pass":true,"statements":[{"sl":41}]},"test_2":{"methods":[{"sl":47}],"name":"testSaveRestart","pass":true,"statements":[{"sl":48}]},"test_209":{"methods":[{"sl":47}],"name":"testDefaults","pass":true,"statements":[{"sl":48}]},"test_238":{"methods":[{"sl":40}],"name":"testCreatesDefaultProfile","pass":true,"statements":[{"sl":41}]},"test_250":{"methods":[{"sl":40}],"name":"testGetUrlForJarFileInvalud","pass":true,"statements":[{"sl":41}]},"test_274":{"methods":[{"sl":40}],"name":"testGetUrlZipWithoutFile","pass":true,"statements":[{"sl":41}]},"test_297":{"methods":[{"sl":47}],"name":"testDoesNotPropagateBeforeConnect","pass":true,"statements":[{"sl":48}]},"test_302":{"methods":[{"sl":47}],"name":"testSaveNoRestart","pass":true,"statements":[{"sl":48}]},"test_303":{"methods":[{"sl":40}],"name":"testExtractsDefaults","pass":true,"statements":[{"sl":41}]},"test_319":{"methods":[{"sl":47}],"name":"testRegisterStatusBar","pass":true,"statements":[{"sl":48}]},"test_32":{"methods":[{"sl":47}],"name":"testGetCategory","pass":true,"statements":[{"sl":48}]},"test_323":{"methods":[{"sl":47}],"name":"testSetName","pass":true,"statements":[{"sl":48}]},"test_347":{"methods":[{"sl":47}],"name":"testDismiss","pass":true,"statements":[{"sl":48}]},"test_351":{"methods":[{"sl":47}],"name":"testCloseAction","pass":true,"statements":[{"sl":48}]},"test_358":{"methods":[{"sl":47}],"name":"testPropagates","pass":true,"statements":[{"sl":48}]},"test_365":{"methods":[{"sl":47}],"name":"testCategoryObjectSaveListeners","pass":true,"statements":[{"sl":48}]},"test_374":{"methods":[{"sl":47}],"name":"testSplitLine","pass":true,"statements":[{"sl":48}]},"test_382":{"methods":[{"sl":40}],"name":"testGetColourOOB","pass":true,"statements":[{"sl":41}]},"test_397":{"methods":[{"sl":47}],"name":"testSetGroup","pass":true,"statements":[{"sl":48}]},"test_4":{"methods":[{"sl":47}],"name":"testAddComponent","pass":true,"statements":[{"sl":48}]},"test_411":{"methods":[{"sl":47}],"name":"testUnregisterStatusBar","pass":true,"statements":[{"sl":48}]},"test_42":{"methods":[{"sl":40}],"name":"testLeavesOtherFilesDuringMigration","pass":true,"statements":[{"sl":41}]},"test_425":{"methods":[{"sl":47}],"name":"testSaveListener","pass":true,"statements":[{"sl":48}]},"test_435":{"methods":[{"sl":40}],"name":"testOnErrorInfoEmitsAppErrorEvent","pass":true,"statements":[{"sl":41}]},"test_449":{"methods":[{"sl":47}],"name":"testGetCategories","pass":true,"statements":[{"sl":48}]},"test_452":{"methods":[{"sl":40}],"name":"testUsesSystemUsernameForProfileNickname","pass":true,"statements":[{"sl":41}]},"test_473":{"methods":[{"sl":40}],"name":"testGetColourHexInvalid","pass":true,"statements":[{"sl":41}]},"test_551":{"methods":[{"sl":47}],"name":"testSetMessage","pass":true,"statements":[{"sl":48}]},"test_563":{"methods":[{"sl":40}],"name":"testDoesNotCreateProfileIfOneExists","pass":true,"statements":[{"sl":41}]},"test_599":{"methods":[{"sl":47}],"name":"testGetNumLines","pass":true,"statements":[{"sl":48}]},"test_624":{"methods":[{"sl":47}],"name":"testSave","pass":true,"statements":[{"sl":48}]},"test_635":{"methods":[{"sl":40}],"name":"testOnErrorInfoIncludesConnectionDetails","pass":true,"statements":[{"sl":41}]},"test_639":{"methods":[{"sl":47}],"name":"testDoesNotPropagateAfterDisconnect","pass":true,"statements":[{"sl":48}]},"test_642":{"methods":[{"sl":47}],"name":"testClearMessage","pass":true,"statements":[{"sl":48}]},"test_643":{"methods":[{"sl":47}],"name":"testGettingServerPrefsRaisesAction","pass":true,"statements":[{"sl":48}]},"test_665":{"methods":[{"sl":47}],"name":"testOnPrivateCTCPSendsReplyIfEventUnhandled","pass":true,"statements":[{"sl":48}]},"test_686":{"methods":[{"sl":40}],"name":"testGetUrlHTTPInvalid","pass":true,"statements":[{"sl":41}]},"test_691":{"methods":[{"sl":40}],"name":"testGetUrlThemeWithoutFile","pass":true,"statements":[{"sl":41}]},"test_692":{"methods":[{"sl":47}],"name":"testRemoveComponent","pass":true,"statements":[{"sl":48}]},"test_700":{"methods":[{"sl":40}],"name":"testLoadsVersionIdentity","pass":true,"statements":[{"sl":41}]},"test_701":{"methods":[{"sl":40}],"name":"testAlwaysUpdatesFormatter","pass":true,"statements":[{"sl":41}]},"test_712":{"methods":[{"sl":40}],"name":"testGetUrlJarWithoutFile","pass":true,"statements":[{"sl":41}]},"test_714":{"methods":[{"sl":47}],"name":"testGettingChannelPrefsRaisesAction","pass":true,"statements":[{"sl":48}]},"test_731":{"methods":[{"sl":47}],"name":"testDelete","pass":true,"statements":[{"sl":48}]},"test_751":{"methods":[{"sl":40}],"name":"testBadActionsLeftOnDisk","pass":true,"statements":[{"sl":41}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [250, 712, 42, 473, 435, 691, 303, 382, 701, 751, 563, 116, 115, 121, 452, 274, 238, 180, 700, 635, 686, 137, 193], [250, 712, 42, 473, 435, 691, 303, 382, 701, 751, 563, 116, 115, 121, 452, 274, 238, 180, 700, 635, 686, 137, 193], [], [], [], [], [], [665, 125, 323, 692, 425, 2, 714, 347, 643, 319, 4, 449, 411, 365, 351, 358, 374, 171, 624, 397, 599, 639, 551, 209, 297, 32, 302, 642, 731], [665, 125, 323, 692, 425, 2, 714, 347, 643, 319, 4, 449, 411, 365, 351, 358, 374, 171, 624, 397, 599, 639, 551, 209, 297, 32, 302, 642, 731], [], [], [], [], [], [], []]
