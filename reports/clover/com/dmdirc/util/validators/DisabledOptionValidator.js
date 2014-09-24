var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":20725,"methods":[{"el":40,"sc":5,"sl":33}],"name":"DisabledOptionValidator","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_765":{"methods":[{"sl":33}],"name":"testValidateFalse","pass":true,"statements":[{"sl":35},{"sl":36}]},"test_857":{"methods":[{"sl":33}],"name":"testValidateNull","pass":true,"statements":[{"sl":35},{"sl":39}]},"test_885":{"methods":[{"sl":33}],"name":"testValidateTrue","pass":true,"statements":[{"sl":35},{"sl":39}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [857, 885, 765], [], [857, 885, 765], [765], [], [], [857, 885], [], [], []]
