var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":113,"id":11734,"methods":[{"el":77,"sc":5,"sl":56},{"el":83,"sc":5,"sl":79},{"el":92,"sc":5,"sl":85},{"el":98,"sc":5,"sl":94},{"el":105,"sc":5,"sl":100},{"el":111,"sc":5,"sl":107}],"name":"ActionAliasMigratorTest","sl":45}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_42":{"methods":[{"sl":94}],"name":"testLeavesOtherFilesDuringMigration","pass":true,"statements":[{"sl":96},{"sl":97}]},"test_421":{"methods":[{"sl":85}],"name":"testDeletesFilesAfterMigration","pass":true,"statements":[{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_460":{"methods":[{"sl":79}],"name":"testNeedMigration","pass":true,"statements":[{"sl":81},{"sl":82}]},"test_567":{"methods":[{"sl":100}],"name":"testMigrationCreatesAliases","pass":true,"statements":[{"sl":102},{"sl":103},{"sl":104}]},"test_751":{"methods":[{"sl":107}],"name":"testBadActionsLeftOnDisk","pass":true,"statements":[{"sl":109},{"sl":110}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [460], [], [460], [460], [], [], [421], [], [421], [421], [421], [421], [421], [], [], [42], [], [42], [42], [], [], [567], [], [567], [567], [567], [], [], [751], [], [751], [751], [], [], []]
