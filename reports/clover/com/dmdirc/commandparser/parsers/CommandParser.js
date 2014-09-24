var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":381,"id":9367,"methods":[{"el":85,"sc":5,"sl":77},{"el":95,"sc":5,"sl":92},{"el":118,"sc":5,"sl":116},{"el":129,"sc":5,"sl":127},{"el":139,"sc":5,"sl":137},{"el":171,"sc":5,"sl":150},{"el":236,"sc":5,"sl":186},{"el":249,"sc":5,"sl":243},{"el":271,"sc":5,"sl":259},{"el":283,"sc":5,"sl":281},{"el":293,"sc":5,"sl":291},{"el":346,"sc":5,"sl":335},{"el":367,"sc":5,"sl":365},{"el":379,"sc":5,"sl":377}],"name":"CommandParser","sl":57}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_154":{"methods":[{"sl":150},{"sl":186},{"sl":243},{"sl":259},{"sl":281}],"name":"testGetCommandTime","pass":true,"statements":[{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":195},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":260},{"sl":262},{"sl":263},{"sl":264},{"sl":265},{"sl":270},{"sl":282}]},"test_162":{"methods":[{"sl":150},{"sl":186},{"sl":243},{"sl":281}],"name":"testParseCommandWithoutArguments","pass":true,"statements":[{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":195},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":282}]},"test_168":{"methods":[{"sl":77}],"name":"testAddsRawWindows","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84}]},"test_215":{"methods":[{"sl":150},{"sl":186},{"sl":243},{"sl":281}],"name":"testParseSilencedChannelCommandWithoutArguments","pass":true,"statements":[{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":195},{"sl":198},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":205},{"sl":206},{"sl":207},{"sl":212},{"sl":213},{"sl":217},{"sl":218},{"sl":232},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":282}]},"test_256":{"methods":[{"sl":77}],"name":"testAddsNewServersToWindowManager","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84}]},"test_267":{"methods":[{"sl":127},{"sl":137}],"name":"testGetCommands","pass":true,"statements":[{"sl":128},{"sl":138}]},"test_27":{"methods":[{"sl":150},{"sl":186},{"sl":243},{"sl":281}],"name":"testParseChannelCommandWithoutArguments","pass":true,"statements":[{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":195},{"sl":198},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":205},{"sl":206},{"sl":207},{"sl":212},{"sl":217},{"sl":218},{"sl":232},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":282}]},"test_318":{"methods":[{"sl":77}],"name":"testDoesNotAddRawWindows","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84}]},"test_363":{"methods":[{"sl":150},{"sl":186},{"sl":281}],"name":"testParseEmptyCommand","pass":true,"statements":[{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":160},{"sl":166},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":195},{"sl":282}]},"test_368":{"methods":[{"sl":150},{"sl":281}],"name":"testParseNonCommand","pass":true,"statements":[{"sl":152},{"sl":154},{"sl":155},{"sl":169},{"sl":282}]},"test_374":{"methods":[{"sl":77}],"name":"testSplitLine","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84}]},"test_418":{"methods":[{"sl":127},{"sl":150},{"sl":186},{"sl":281}],"name":"testParseUnregisterCommand","pass":true,"statements":[{"sl":128},{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":160},{"sl":166},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":195},{"sl":282}]},"test_454":{"methods":[{"sl":77}],"name":"testDevChatNoServers","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84}]},"test_495":{"methods":[{"sl":150},{"sl":186},{"sl":243},{"sl":281}],"name":"testParseSilentCommandWithArguments","pass":true,"statements":[{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":195},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":282}]},"test_526":{"methods":[{"sl":150},{"sl":186},{"sl":243},{"sl":281}],"name":"testParseChannelCommandWithArguments","pass":true,"statements":[{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":195},{"sl":198},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":205},{"sl":206},{"sl":207},{"sl":212},{"sl":215},{"sl":217},{"sl":218},{"sl":232},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":282}]},"test_545":{"methods":[{"sl":150},{"sl":186},{"sl":243},{"sl":281}],"name":"testParseSilentCommandWithoutArguments","pass":true,"statements":[{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":195},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":282}]},"test_599":{"methods":[{"sl":77}],"name":"testGetNumLines","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84}]},"test_616":{"methods":[{"sl":150},{"sl":186},{"sl":281}],"name":"testParseUnknownCommand","pass":true,"statements":[{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":160},{"sl":166},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":195},{"sl":282}]},"test_622":{"methods":[{"sl":150},{"sl":186},{"sl":243},{"sl":281}],"name":"testParseCommandWithArguments","pass":true,"statements":[{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":195},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":282}]},"test_651":{"methods":[{"sl":150},{"sl":186},{"sl":281}],"name":"testParseEmptySilenceCommand","pass":true,"statements":[{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":160},{"sl":166},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":195},{"sl":282}]},"test_706":{"methods":[{"sl":150},{"sl":186},{"sl":243},{"sl":281}],"name":"testParseSilencedChannelCommandWithArguments","pass":true,"statements":[{"sl":152},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":188},{"sl":189},{"sl":190},{"sl":192},{"sl":195},{"sl":198},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":205},{"sl":206},{"sl":207},{"sl":212},{"sl":213},{"sl":215},{"sl":217},{"sl":218},{"sl":232},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":282}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [454, 318, 256, 168, 374, 599], [], [], [454, 318, 256, 168, 374, 599], [454, 318, 256, 168, 374, 599], [454, 318, 256, 168, 374, 599], [454, 318, 256, 168, 374, 599], [454, 318, 256, 168, 374, 599], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [267, 418], [267, 418], [], [], [], [], [], [], [], [], [267], [267], [], [], [], [], [], [], [], [], [], [], [], [162, 495, 622, 545, 651, 368, 27, 706, 154, 418, 363, 616, 526, 215], [], [162, 495, 622, 545, 651, 368, 27, 706, 154, 418, 363, 616, 526, 215], [], [162, 495, 622, 545, 651, 368, 27, 706, 154, 418, 363, 616, 526, 215], [162, 495, 622, 545, 651, 368, 27, 706, 154, 418, 363, 616, 526, 215], [162, 495, 622, 545, 651, 27, 706, 154, 418, 363, 616, 526, 215], [27, 706, 526, 215], [], [], [162, 495, 622, 545, 651, 27, 706, 154, 418, 363, 616, 526, 215], [162, 495, 622, 545, 27, 706, 154, 526, 215], [162, 495, 622, 545, 27, 706, 154, 526, 215], [162, 495, 622, 545, 27, 706, 154, 526, 215], [], [], [651, 418, 363, 616], [], [], [368], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [162, 495, 622, 545, 651, 27, 706, 154, 418, 363, 616, 526, 215], [], [162, 495, 622, 545, 651, 27, 706, 154, 418, 363, 616, 526, 215], [162, 495, 622, 545, 651, 27, 706, 154, 418, 363, 616, 526, 215], [162, 495, 622, 545, 651, 27, 706, 154, 418, 363, 616, 526, 215], [], [162, 495, 622, 545, 651, 27, 706, 154, 418, 363, 616, 526, 215], [], [], [162, 495, 622, 545, 651, 27, 706, 154, 418, 363, 616, 526, 215], [], [], [27, 706, 526, 215], [27, 706, 526, 215], [27, 706, 526, 215], [27, 706, 526, 215], [27, 706, 526, 215], [], [], [27, 706, 526, 215], [27, 706, 526, 215], [27, 706, 526, 215], [], [], [], [], [27, 706, 526, 215], [706, 215], [], [706, 526], [], [27, 706, 526, 215], [27, 706, 526, 215], [], [], [], [], [], [], [], [], [], [], [], [], [], [27, 706, 526, 215], [], [], [], [], [], [], [], [], [], [], [162, 495, 622, 545, 27, 706, 154, 526, 215], [162, 495, 622, 545, 27, 706, 154, 526, 215], [162, 495, 622, 545, 27, 706, 154, 526, 215], [162, 495, 622, 545, 27, 706, 154, 526, 215], [162, 495, 622, 545, 27, 706, 154, 526, 215], [], [], [], [], [], [], [], [], [], [], [], [154], [154], [], [154], [154], [154], [154], [], [], [], [], [154], [], [], [], [], [], [], [], [], [], [], [162, 495, 622, 545, 651, 368, 27, 706, 154, 418, 363, 616, 526, 215], [162, 495, 622, 545, 651, 368, 27, 706, 154, 418, 363, 616, 526, 215], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
