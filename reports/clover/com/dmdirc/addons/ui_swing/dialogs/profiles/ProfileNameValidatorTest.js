var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":87,"id":35681,"methods":[{"el":59,"sc":5,"sl":50},{"el":68,"sc":5,"sl":64},{"el":77,"sc":5,"sl":73},{"el":86,"sc":5,"sl":82}],"name":"ProfileNameValidatorTest","sl":43}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1202":{"methods":[{"sl":64}],"name":"testValidateNoDupes","pass":true,"statements":[{"sl":66},{"sl":67}]},"test_1206":{"methods":[{"sl":82}],"name":"testValidateSelectedDupe","pass":true,"statements":[{"sl":84},{"sl":85}]},"test_1208":{"methods":[{"sl":73}],"name":"testValidateNonSelectedDupe","pass":true,"statements":[{"sl":75},{"sl":76}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1202], [], [1202], [1202], [], [], [], [], [], [1208], [], [1208], [1208], [], [], [], [], [], [1206], [], [1206], [1206], [], []]
