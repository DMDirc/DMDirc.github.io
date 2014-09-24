var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":130,"id":28550,"methods":[{"el":43,"sc":5,"sl":37},{"el":51,"sc":5,"sl":45},{"el":59,"sc":5,"sl":53},{"el":67,"sc":5,"sl":61},{"el":75,"sc":5,"sl":69},{"el":83,"sc":5,"sl":77},{"el":92,"sc":5,"sl":85},{"el":109,"sc":5,"sl":94},{"el":114,"sc":5,"sl":111},{"el":123,"sc":5,"sl":116},{"el":128,"sc":5,"sl":125}],"name":"ParserErrorTest","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1008":{"methods":[{"sl":45}],"name":"testIsError","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49},{"sl":50}]},"test_1026":{"methods":[{"sl":53}],"name":"testIsWarning","pass":true,"statements":[{"sl":55},{"sl":56},{"sl":57},{"sl":58}]},"test_1033":{"methods":[{"sl":85}],"name":"testIsUser","pass":true,"statements":[{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_1065":{"methods":[{"sl":125}],"name":"testGetLastLine","pass":true,"statements":[{"sl":127}]},"test_1067":{"methods":[{"sl":37}],"name":"testIsFatal","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":42}]},"test_1088":{"methods":[{"sl":94}],"name":"testException","pass":true,"statements":[{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":103},{"sl":105},{"sl":106},{"sl":107},{"sl":108}]},"test_1095":{"methods":[{"sl":77}],"name":"testGetLevel","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81},{"sl":82}]},"test_1098":{"methods":[{"sl":116}],"name":"testAppendData","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":121},{"sl":122}]},"test_960":{"methods":[{"sl":61}],"name":"testIsException","pass":true,"statements":[{"sl":63},{"sl":64},{"sl":65},{"sl":66}]},"test_976":{"methods":[{"sl":69}],"name":"testHasLastLine","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73},{"sl":74}]},"test_983":{"methods":[{"sl":111}],"name":"testGetData","pass":true,"statements":[{"sl":113}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1067], [], [1067], [1067], [1067], [1067], [], [], [1008], [], [1008], [1008], [1008], [1008], [], [], [1026], [], [1026], [1026], [1026], [1026], [], [], [960], [], [960], [960], [960], [960], [], [], [976], [], [976], [976], [976], [976], [], [], [1095], [], [1095], [1095], [1095], [1095], [], [], [1033], [], [1033], [1033], [1033], [1033], [1033], [], [], [1088], [], [1088], [], [1088], [1088], [1088], [1088], [], [1088], [], [1088], [1088], [1088], [1088], [], [], [983], [], [983], [], [], [1098], [], [1098], [1098], [], [1098], [1098], [], [], [1065], [], [1065], [], [], []]
