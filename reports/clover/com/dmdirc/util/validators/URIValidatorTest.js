var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":49,"id":20917,"methods":[{"el":36,"sc":5,"sl":31},{"el":42,"sc":5,"sl":38},{"el":48,"sc":5,"sl":44}],"name":"URIValidatorTest","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_812":{"methods":[{"sl":38}],"name":"testValidateInvalidURI","pass":true,"statements":[{"sl":40},{"sl":41}]},"test_847":{"methods":[{"sl":44}],"name":"testValidateValid","pass":true,"statements":[{"sl":46},{"sl":47}]},"test_869":{"methods":[{"sl":31}],"name":"testValidateNoHostname","pass":true,"statements":[{"sl":33},{"sl":34}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [869], [], [869], [869], [], [], [], [812], [], [812], [812], [], [], [847], [], [847], [847], [], []]
