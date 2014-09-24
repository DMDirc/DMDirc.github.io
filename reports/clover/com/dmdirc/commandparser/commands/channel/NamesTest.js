var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":79,"id":11226,"methods":[{"el":61,"sc":5,"sl":53},{"el":69,"sc":5,"sl":63},{"el":77,"sc":5,"sl":71}],"name":"NamesTest","sl":43}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_69":{"methods":[{"sl":63}],"name":"testNormal","pass":true,"statements":[{"sl":65},{"sl":68}]},"test_739":{"methods":[{"sl":71}],"name":"testExternal","pass":true,"statements":[{"sl":73},{"sl":76}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [69], [], [69], [], [], [69], [], [], [739], [], [739], [], [], [739], [], [], []]
