var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":280,"id":27959,"methods":[{"el":54,"sc":5,"sl":45},{"el":66,"sc":5,"sl":57},{"el":83,"sc":5,"sl":69},{"el":99,"sc":5,"sl":86},{"el":111,"sc":5,"sl":102},{"el":123,"sc":5,"sl":114},{"el":135,"sc":5,"sl":126},{"el":147,"sc":5,"sl":138},{"el":159,"sc":5,"sl":150},{"el":170,"sc":5,"sl":162},{"el":181,"sc":5,"sl":173},{"el":199,"sc":5,"sl":184},{"el":210,"sc":5,"sl":202},{"el":222,"sc":5,"sl":213},{"el":233,"sc":5,"sl":226},{"el":249,"sc":5,"sl":237},{"el":265,"sc":5,"sl":252},{"el":279,"sc":5,"sl":268}],"name":"IRCReaderTest","sl":42}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1001":{"methods":[{"sl":138}],"name":"testGetDestinationNoSource","pass":true,"statements":[{"sl":140},{"sl":141},{"sl":143},{"sl":145}]},"test_1009":{"methods":[{"sl":252}],"name":"testReaderIRCv3TS","pass":true,"statements":[{"sl":254},{"sl":255},{"sl":256},{"sl":258},{"sl":259},{"sl":261},{"sl":262},{"sl":263},{"sl":264}]},"test_1016":{"methods":[{"sl":57}],"name":"testReadLineWithOnlyLF","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":62},{"sl":63},{"sl":65}]},"test_1032":{"methods":[{"sl":226}],"name":"testReadLineNumericTag","pass":true,"statements":[{"sl":228},{"sl":230},{"sl":231},{"sl":232}]},"test_1053":{"methods":[{"sl":45}],"name":"testReadLine","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":50},{"sl":51},{"sl":53}]},"test_1054":{"methods":[{"sl":184}],"name":"testHandlesBadCoding","pass":true,"statements":[{"sl":186},{"sl":187},{"sl":189},{"sl":193},{"sl":196},{"sl":198}]},"test_1064":{"methods":[{"sl":237}],"name":"testReaderTSIRC","pass":true,"statements":[{"sl":239},{"sl":240},{"sl":242},{"sl":243},{"sl":245},{"sl":246},{"sl":247},{"sl":248}]},"test_1066":{"methods":[{"sl":150}],"name":"testGetDestinationTooShort","pass":true,"statements":[{"sl":152},{"sl":153},{"sl":155},{"sl":157}]},"test_1076":{"methods":[{"sl":114}],"name":"testGetEmptySource","pass":true,"statements":[{"sl":116},{"sl":117},{"sl":119},{"sl":121}]},"test_1096":{"methods":[{"sl":86}],"name":"testReadLineWithMultipleSpaces","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":91},{"sl":95},{"sl":96},{"sl":98}]},"test_959":{"methods":[{"sl":268}],"name":"testReaderNumericTag","pass":true,"statements":[{"sl":270},{"sl":271},{"sl":273},{"sl":274},{"sl":276},{"sl":277},{"sl":278}]},"test_964":{"methods":[{"sl":102}],"name":"testGetSource","pass":true,"statements":[{"sl":104},{"sl":105},{"sl":107},{"sl":109}]},"test_970":{"methods":[{"sl":126}],"name":"testGetDestination","pass":true,"statements":[{"sl":128},{"sl":129},{"sl":131},{"sl":133}]},"test_977":{"methods":[{"sl":173}],"name":"testClose","pass":true,"statements":[{"sl":175},{"sl":176},{"sl":178},{"sl":180}]},"test_979":{"methods":[{"sl":202}],"name":"testReadLineTSIRC","pass":true,"statements":[{"sl":204},{"sl":206},{"sl":207},{"sl":208},{"sl":209}]},"test_984":{"methods":[{"sl":162}],"name":"testGetDestinationWithNumeric","pass":true,"statements":[{"sl":164},{"sl":165},{"sl":167},{"sl":169}]},"test_987":{"methods":[{"sl":213}],"name":"testReadLineIRCv3TS","pass":true,"statements":[{"sl":215},{"sl":216},{"sl":218},{"sl":219},{"sl":220},{"sl":221}]},"test_991":{"methods":[{"sl":69}],"name":"testReadLineWithParameter","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":74},{"sl":78},{"sl":79},{"sl":81}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1053], [], [1053], [1053], [], [1053], [1053], [], [1053], [], [], [], [1016], [], [1016], [1016], [], [1016], [1016], [], [1016], [], [], [], [991], [], [991], [991], [], [991], [], [], [], [991], [991], [], [991], [], [], [], [], [1096], [], [1096], [1096], [], [1096], [], [], [], [1096], [1096], [], [1096], [], [], [], [964], [], [964], [964], [], [964], [], [964], [], [], [], [], [1076], [], [1076], [1076], [], [1076], [], [1076], [], [], [], [], [970], [], [970], [970], [], [970], [], [970], [], [], [], [], [1001], [], [1001], [1001], [], [1001], [], [1001], [], [], [], [], [1066], [], [1066], [1066], [], [1066], [], [1066], [], [], [], [], [984], [], [984], [984], [], [984], [], [984], [], [], [], [977], [], [977], [977], [], [977], [], [977], [], [], [], [1054], [], [1054], [1054], [], [1054], [], [], [], [1054], [], [], [1054], [], [1054], [], [], [], [979], [], [979], [], [979], [979], [979], [979], [], [], [], [987], [], [987], [987], [], [987], [987], [987], [987], [], [], [], [], [1032], [], [1032], [], [1032], [1032], [1032], [], [], [], [], [1064], [], [1064], [1064], [], [1064], [1064], [], [1064], [1064], [1064], [1064], [], [], [], [1009], [], [1009], [1009], [1009], [], [1009], [1009], [], [1009], [1009], [1009], [1009], [], [], [], [959], [], [959], [959], [], [959], [959], [], [959], [959], [959], [], []]
