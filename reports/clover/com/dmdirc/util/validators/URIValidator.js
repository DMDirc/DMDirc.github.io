var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":46,"id":20667,"methods":[{"el":45,"sc":5,"sl":33}],"name":"URIValidator","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_807":{"methods":[{"sl":33}],"name":"testValidateNoProtocol","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":44}]},"test_812":{"methods":[{"sl":33}],"name":"testValidateInvalidURI","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":38},{"sl":41}]},"test_830":{"methods":[{"sl":33}],"name":"testValidateNoHostname","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":38},{"sl":39}]},"test_843":{"methods":[{"sl":33}],"name":"testValidateInvalidURI","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":38},{"sl":41}]},"test_847":{"methods":[{"sl":33}],"name":"testValidateValid","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":44}]},"test_850":{"methods":[{"sl":33}],"name":"testValidateValid","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":44}]},"test_869":{"methods":[{"sl":33}],"name":"testValidateNoHostname","pass":true,"statements":[{"sl":35},{"sl":36},{"sl":38},{"sl":39}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [843, 812, 869, 830, 850, 847, 807], [], [843, 812, 869, 830, 850, 847, 807], [843, 812, 869, 830, 850, 847, 807], [], [843, 812, 869, 830], [869, 830], [], [843, 812], [], [], [850, 847, 807], [], []]
