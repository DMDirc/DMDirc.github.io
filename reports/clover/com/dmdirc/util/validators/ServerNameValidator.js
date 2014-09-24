var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":41,"id":20623,"methods":[{"el":40,"sc":5,"sl":30}],"name":"ServerNameValidator","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_807":{"methods":[{"sl":30}],"name":"testValidateNoProtocol","pass":true,"statements":[{"sl":32},{"sl":35},{"sl":36}]},"test_808":{"methods":[{"sl":30}],"name":"testValidateNull","pass":true,"statements":[{"sl":32},{"sl":33}]},"test_830":{"methods":[{"sl":30}],"name":"testValidateNoHostname","pass":true,"statements":[{"sl":32},{"sl":35},{"sl":38}]},"test_843":{"methods":[{"sl":30}],"name":"testValidateInvalidURI","pass":true,"statements":[{"sl":32},{"sl":35},{"sl":36}]},"test_850":{"methods":[{"sl":30}],"name":"testValidateValid","pass":true,"statements":[{"sl":32},{"sl":35},{"sl":36}]},"test_869":{"methods":[{"sl":30}],"name":"testValidateNoHostname","pass":true,"statements":[{"sl":32},{"sl":35},{"sl":38}]},"test_929":{"methods":[{"sl":30}],"name":"testValidateEmpty","pass":true,"statements":[{"sl":32},{"sl":33}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [843, 869, 830, 808, 850, 807, 929], [], [843, 869, 830, 808, 850, 807, 929], [808, 929], [], [843, 869, 830, 850, 807], [843, 850, 807], [], [869, 830], [], [], []]
