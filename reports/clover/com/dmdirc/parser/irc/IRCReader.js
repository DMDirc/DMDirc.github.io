var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":319,"id":27426,"methods":[{"el":69,"sc":5,"sl":67},{"el":85,"sc":5,"sl":78},{"el":152,"sc":5,"sl":96},{"el":190,"sc":5,"sl":164},{"el":206,"sc":5,"sl":200},{"el":227,"sc":5,"sl":217},{"el":232,"sc":5,"sl":229}],"name":"IRCReader","sl":48},{"el":318,"id":27531,"methods":[{"el":286,"sc":9,"sl":254},{"el":298,"sc":9,"sl":296},{"el":308,"sc":9,"sl":306},{"el":317,"sc":9,"sl":315}],"name":"IRCReader.ReadLine","sl":238}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1000":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testPrivateCTCP","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1001":{"methods":[{"sl":67},{"sl":78},{"sl":96},{"sl":164},{"sl":200},{"sl":217},{"sl":254}],"name":"testGetDestinationNoSource","pass":true,"statements":[{"sl":68},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":126},{"sl":128},{"sl":129},{"sl":132},{"sl":134},{"sl":136},{"sl":137},{"sl":143},{"sl":146},{"sl":151},{"sl":165},{"sl":166},{"sl":169},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":185},{"sl":201},{"sl":205},{"sl":218},{"sl":226},{"sl":255},{"sl":257},{"sl":258},{"sl":285}]},"test_1002":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testReopList","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1003":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testEmptyPart","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1004":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testAlteringUmodes","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1005":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testGetSetParamMode","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1006":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testImportantMode","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1007":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testModeSendOptimisation2","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1009":{"methods":[{"sl":67},{"sl":78},{"sl":96},{"sl":164},{"sl":254},{"sl":306},{"sl":315}],"name":"testReaderIRCv3TS","pass":true,"statements":[{"sl":68},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":117},{"sl":118},{"sl":119},{"sl":123},{"sl":124},{"sl":126},{"sl":127},{"sl":128},{"sl":132},{"sl":134},{"sl":136},{"sl":138},{"sl":139},{"sl":143},{"sl":146},{"sl":151},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":171},{"sl":172},{"sl":182},{"sl":185},{"sl":255},{"sl":257},{"sl":258},{"sl":260},{"sl":261},{"sl":262},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":275},{"sl":276},{"sl":280},{"sl":281},{"sl":285},{"sl":307},{"sl":316}]},"test_1011":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testEmptyQuit","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1014":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testAuthNotice","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1015":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testNickSameName","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1016":{"methods":[{"sl":67},{"sl":78},{"sl":96},{"sl":164},{"sl":254},{"sl":296}],"name":"testReadLineWithOnlyLF","pass":true,"statements":[{"sl":68},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":110},{"sl":112},{"sl":115},{"sl":126},{"sl":128},{"sl":129},{"sl":132},{"sl":134},{"sl":143},{"sl":146},{"sl":151},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":171},{"sl":172},{"sl":182},{"sl":185},{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297}]},"test_1018":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testSendMessage","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1019":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"test005Parsing","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1020":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testCaseMappingASCII","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1022":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testKick","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1024":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testChannelUmodes","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1028":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testTopicChange","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1029":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testModeUnsetKey","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1030":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testDuplicate001","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1032":{"methods":[{"sl":254},{"sl":306},{"sl":315}],"name":"testReadLineNumericTag","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":260},{"sl":261},{"sl":262},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":275},{"sl":276},{"sl":280},{"sl":281},{"sl":285},{"sl":307},{"sl":316}]},"test_1035":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testKick","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1036":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testCaseMappingUnknown","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1038":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testSelfAway","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1039":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testChannelUmodes","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1040":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testCaseMappingRFC","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1041":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testPrivateAction","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1043":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testIrcdDetection","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1044":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testOtherJoinChannel","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1045":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testSendCTCPReplyEmpty","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1046":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testPre001NickChange","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1047":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testOverrideNick","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1048":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testIrcdDetection","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1051":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testUnknownNick","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1053":{"methods":[{"sl":67},{"sl":78},{"sl":96},{"sl":164},{"sl":254},{"sl":296}],"name":"testReadLine","pass":true,"statements":[{"sl":68},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":126},{"sl":128},{"sl":129},{"sl":132},{"sl":134},{"sl":143},{"sl":146},{"sl":151},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":171},{"sl":172},{"sl":182},{"sl":185},{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297}]},"test_1054":{"methods":[{"sl":78},{"sl":96},{"sl":164},{"sl":200},{"sl":217},{"sl":254},{"sl":306}],"name":"testHandlesBadCoding","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":126},{"sl":128},{"sl":129},{"sl":132},{"sl":134},{"sl":136},{"sl":137},{"sl":143},{"sl":146},{"sl":151},{"sl":165},{"sl":166},{"sl":169},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":185},{"sl":201},{"sl":202},{"sl":218},{"sl":219},{"sl":221},{"sl":222},{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":307}]},"test_1056":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testModeSendExtra","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1057":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testIssue1410","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1058":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testIssue1674","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1060":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testChannelModes","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1061":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testCaseMappingStrict","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1062":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testIrcdDetection","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1063":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testError","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1064":{"methods":[{"sl":67},{"sl":78},{"sl":96},{"sl":164},{"sl":254},{"sl":306},{"sl":315}],"name":"testReaderTSIRC","pass":true,"statements":[{"sl":68},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":117},{"sl":118},{"sl":119},{"sl":123},{"sl":126},{"sl":127},{"sl":128},{"sl":132},{"sl":134},{"sl":143},{"sl":146},{"sl":151},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":171},{"sl":172},{"sl":182},{"sl":185},{"sl":255},{"sl":257},{"sl":258},{"sl":260},{"sl":261},{"sl":262},{"sl":263},{"sl":264},{"sl":265},{"sl":266},{"sl":267},{"sl":271},{"sl":285},{"sl":307},{"sl":316}]},"test_1066":{"methods":[{"sl":67},{"sl":78},{"sl":96},{"sl":164},{"sl":200},{"sl":217},{"sl":254}],"name":"testGetDestinationTooShort","pass":true,"statements":[{"sl":68},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":126},{"sl":128},{"sl":129},{"sl":132},{"sl":134},{"sl":136},{"sl":137},{"sl":143},{"sl":146},{"sl":151},{"sl":165},{"sl":166},{"sl":169},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":185},{"sl":201},{"sl":202},{"sl":218},{"sl":219},{"sl":221},{"sl":226},{"sl":255},{"sl":257},{"sl":258},{"sl":285}]},"test_1068":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testSendCTCP","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1069":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testModeSendOptimisation1","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1072":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testNormalPart","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1075":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testBasicUmodes","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1076":{"methods":[{"sl":67},{"sl":78},{"sl":96},{"sl":164},{"sl":200},{"sl":217},{"sl":254}],"name":"testGetEmptySource","pass":true,"statements":[{"sl":68},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":126},{"sl":128},{"sl":129},{"sl":132},{"sl":134},{"sl":136},{"sl":137},{"sl":143},{"sl":146},{"sl":151},{"sl":165},{"sl":166},{"sl":169},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":185},{"sl":201},{"sl":205},{"sl":218},{"sl":226},{"sl":255},{"sl":257},{"sl":258},{"sl":285}]},"test_1077":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testSendNotice","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1080":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testMap","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1082":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testInvexList","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1083":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testNickDifferent","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1084":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testSendAction","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1085":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testBasicTopic","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1089":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testChannelQuit","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1092":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testSelfJoinChannel","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1094":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testIrcdDetection","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_1096":{"methods":[{"sl":67},{"sl":78},{"sl":96},{"sl":164},{"sl":200},{"sl":217},{"sl":254},{"sl":306}],"name":"testReadLineWithMultipleSpaces","pass":true,"statements":[{"sl":68},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":126},{"sl":128},{"sl":129},{"sl":132},{"sl":134},{"sl":136},{"sl":137},{"sl":143},{"sl":146},{"sl":151},{"sl":165},{"sl":166},{"sl":169},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":185},{"sl":201},{"sl":205},{"sl":218},{"sl":226},{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":307}]},"test_1097":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testExemptList","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_958":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testPrivateMessage","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_959":{"methods":[{"sl":67},{"sl":78},{"sl":96},{"sl":164},{"sl":254},{"sl":306},{"sl":315}],"name":"testReaderNumericTag","pass":true,"statements":[{"sl":68},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":117},{"sl":118},{"sl":119},{"sl":123},{"sl":126},{"sl":127},{"sl":128},{"sl":132},{"sl":134},{"sl":136},{"sl":138},{"sl":139},{"sl":143},{"sl":146},{"sl":151},{"sl":165},{"sl":166},{"sl":167},{"sl":169},{"sl":171},{"sl":172},{"sl":182},{"sl":185},{"sl":255},{"sl":257},{"sl":258},{"sl":260},{"sl":261},{"sl":262},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":275},{"sl":276},{"sl":280},{"sl":281},{"sl":285},{"sl":307},{"sl":316}]},"test_963":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testNormalBans","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_964":{"methods":[{"sl":67},{"sl":78},{"sl":96},{"sl":164},{"sl":200},{"sl":217},{"sl":254}],"name":"testGetSource","pass":true,"statements":[{"sl":68},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":126},{"sl":128},{"sl":129},{"sl":132},{"sl":134},{"sl":136},{"sl":137},{"sl":143},{"sl":146},{"sl":151},{"sl":165},{"sl":166},{"sl":169},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":185},{"sl":201},{"sl":202},{"sl":218},{"sl":219},{"sl":221},{"sl":226},{"sl":255},{"sl":257},{"sl":258},{"sl":285}]},"test_966":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testGlobalQuit","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_968":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testExternalNames","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_969":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testAuthNoticeTwenty","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_970":{"methods":[{"sl":67},{"sl":78},{"sl":96},{"sl":164},{"sl":200},{"sl":217},{"sl":254}],"name":"testGetDestination","pass":true,"statements":[{"sl":68},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":126},{"sl":128},{"sl":129},{"sl":132},{"sl":134},{"sl":136},{"sl":137},{"sl":143},{"sl":146},{"sl":151},{"sl":165},{"sl":166},{"sl":169},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":185},{"sl":201},{"sl":202},{"sl":218},{"sl":219},{"sl":221},{"sl":222},{"sl":255},{"sl":257},{"sl":258},{"sl":285}]},"test_971":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testModeSendFull","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_972":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testSendCTCPEmpty","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_974":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testSendEmptyMessages","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_975":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testSendCTCPReply","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_977":{"methods":[{"sl":67},{"sl":78},{"sl":229}],"name":"testClose","pass":true,"statements":[{"sl":68},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":231}]},"test_978":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testIrcdDetection","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_979":{"methods":[{"sl":254},{"sl":306},{"sl":315}],"name":"testReadLineTSIRC","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":260},{"sl":261},{"sl":262},{"sl":263},{"sl":264},{"sl":265},{"sl":266},{"sl":267},{"sl":271},{"sl":285},{"sl":307},{"sl":316}]},"test_981":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testServerReady","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_982":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testPingPong","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_984":{"methods":[{"sl":67},{"sl":78},{"sl":96},{"sl":164},{"sl":200},{"sl":217},{"sl":254}],"name":"testGetDestinationWithNumeric","pass":true,"statements":[{"sl":68},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":126},{"sl":128},{"sl":129},{"sl":132},{"sl":134},{"sl":136},{"sl":137},{"sl":143},{"sl":146},{"sl":151},{"sl":165},{"sl":166},{"sl":169},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":185},{"sl":201},{"sl":202},{"sl":218},{"sl":219},{"sl":221},{"sl":222},{"sl":255},{"sl":257},{"sl":258},{"sl":285}]},"test_987":{"methods":[{"sl":254},{"sl":306},{"sl":315}],"name":"testReadLineIRCv3TS","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":260},{"sl":261},{"sl":262},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":275},{"sl":276},{"sl":280},{"sl":281},{"sl":285},{"sl":307},{"sl":316}]},"test_988":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testUnknownUser1","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_989":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testIrcdDetection","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]},"test_991":{"methods":[{"sl":67},{"sl":78},{"sl":96},{"sl":164},{"sl":200},{"sl":217},{"sl":254},{"sl":306}],"name":"testReadLineWithParameter","pass":true,"statements":[{"sl":68},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":105},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":115},{"sl":126},{"sl":128},{"sl":129},{"sl":132},{"sl":134},{"sl":136},{"sl":137},{"sl":143},{"sl":146},{"sl":151},{"sl":165},{"sl":166},{"sl":169},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":176},{"sl":178},{"sl":179},{"sl":180},{"sl":185},{"sl":201},{"sl":205},{"sl":218},{"sl":226},{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":307}]},"test_993":{"methods":[{"sl":254},{"sl":296},{"sl":306},{"sl":315}],"name":"testNumeric","pass":true,"statements":[{"sl":255},{"sl":257},{"sl":258},{"sl":285},{"sl":297},{"sl":307},{"sl":316}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [984, 959, 991, 1001, 1053, 977, 964, 1009, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 977, 964, 1009, 1016, 1096, 1066, 1076, 1064, 970], [], [], [], [], [], [], [], [], [], [984, 959, 991, 1001, 1053, 977, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [], [984, 959, 991, 1001, 1053, 977, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 977, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 977, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 977, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 977, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [], [], [], [], [], [], [], [], [], [], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [], [959, 1009, 1064], [959, 1009, 1064], [959, 1009, 1064], [], [], [], [959, 1009, 1064], [1009], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [959, 1009, 1064], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 991, 1001, 1053, 964, 1054, 1016, 1096, 1066, 1076, 970], [], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [], [984, 959, 991, 1001, 964, 1009, 1054, 1096, 1066, 1076, 970], [984, 991, 1001, 964, 1054, 1096, 1066, 1076, 970], [959, 1009], [959, 1009], [], [], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [], [], [], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [], [], [], [], [], [], [], [], [], [], [], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [959, 1053, 1009, 1016, 1064], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [984, 991, 1001, 964, 1054, 1096, 1066, 1076, 970], [984, 991, 1001, 964, 1054, 1096, 1066, 1076, 970], [], [984, 991, 1001, 964, 1054, 1096, 1066, 1076, 970], [], [984, 991, 1001, 964, 1054, 1096, 1066, 1076, 970], [984, 991, 1001, 964, 1054, 1096, 1066, 1076, 970], [984, 991, 1001, 964, 1054, 1096, 1066, 1076, 970], [], [959, 1053, 1009, 1016, 1064], [], [], [984, 959, 991, 1001, 1053, 964, 1009, 1054, 1016, 1096, 1066, 1076, 1064, 970], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [984, 991, 1001, 964, 1054, 1096, 1066, 1076, 970], [984, 991, 1001, 964, 1054, 1096, 1066, 1076, 970], [984, 964, 1054, 1066, 970], [], [], [991, 1001, 1096, 1076], [], [], [], [], [], [], [], [], [], [], [], [984, 991, 1001, 964, 1054, 1096, 1066, 1076, 970], [984, 991, 1001, 964, 1054, 1096, 1066, 1076, 970], [984, 964, 1054, 1066, 970], [], [984, 964, 1054, 1066, 970], [984, 1054, 970], [], [], [], [991, 1001, 964, 1096, 1066, 1076], [], [], [977], [], [977], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [981, 984, 1024, 1036, 1084, 1083, 1006, 1002, 1030, 1097, 959, 991, 974, 1038, 1072, 1001, 987, 1032, 1053, 1063, 1068, 969, 1060, 1000, 1022, 1085, 1046, 1061, 963, 1018, 958, 1041, 964, 971, 972, 1009, 1040, 1051, 1019, 1039, 978, 979, 1007, 988, 1054, 1048, 989, 1069, 1043, 993, 1082, 1092, 1047, 1015, 1016, 1096, 1080, 1058, 968, 1004, 1003, 1057, 982, 1020, 1014, 1028, 1077, 1066, 1076, 1075, 1089, 1094, 1029, 1045, 1011, 966, 1064, 1044, 1005, 975, 970, 1062, 1035, 1056], [981, 984, 1024, 1036, 1084, 1083, 1006, 1002, 1030, 1097, 959, 991, 974, 1038, 1072, 1001, 987, 1032, 1053, 1063, 1068, 969, 1060, 1000, 1022, 1085, 1046, 1061, 963, 1018, 958, 1041, 964, 971, 972, 1009, 1040, 1051, 1019, 1039, 978, 979, 1007, 988, 1054, 1048, 989, 1069, 1043, 993, 1082, 1092, 1047, 1015, 1016, 1096, 1080, 1058, 968, 1004, 1003, 1057, 982, 1020, 1014, 1028, 1077, 1066, 1076, 1075, 1089, 1094, 1029, 1045, 1011, 966, 1064, 1044, 1005, 975, 970, 1062, 1035, 1056], [], [981, 984, 1024, 1036, 1084, 1083, 1006, 1002, 1030, 1097, 959, 991, 974, 1038, 1072, 1001, 987, 1032, 1053, 1063, 1068, 969, 1060, 1000, 1022, 1085, 1046, 1061, 963, 1018, 958, 1041, 964, 971, 972, 1009, 1040, 1051, 1019, 1039, 978, 979, 1007, 988, 1054, 1048, 989, 1069, 1043, 993, 1082, 1092, 1047, 1015, 1016, 1096, 1080, 1058, 968, 1004, 1003, 1057, 982, 1020, 1014, 1028, 1077, 1066, 1076, 1075, 1089, 1094, 1029, 1045, 1011, 966, 1064, 1044, 1005, 975, 970, 1062, 1035, 1056], [981, 984, 1024, 1036, 1084, 1083, 1006, 1002, 1030, 1097, 959, 991, 974, 1038, 1072, 1001, 987, 1032, 1053, 1063, 1068, 969, 1060, 1000, 1022, 1085, 1046, 1061, 963, 1018, 958, 1041, 964, 971, 972, 1009, 1040, 1051, 1019, 1039, 978, 979, 1007, 988, 1054, 1048, 989, 1069, 1043, 993, 1082, 1092, 1047, 1015, 1016, 1096, 1080, 1058, 968, 1004, 1003, 1057, 982, 1020, 1014, 1028, 1077, 1066, 1076, 1075, 1089, 1094, 1029, 1045, 1011, 966, 1064, 1044, 1005, 975, 970, 1062, 1035, 1056], [], [959, 987, 1032, 1009, 979, 1064], [959, 987, 1032, 1009, 979, 1064], [959, 987, 1032, 1009, 979, 1064], [979, 1064], [979, 1064], [979, 1064], [979, 1064], [979, 1064], [], [], [], [959, 987, 1032, 1009, 979, 1064], [959, 987, 1032, 1009], [959, 987, 1032, 1009], [959, 987, 1032, 1009], [959, 987, 1032, 1009], [959, 987, 1032, 1009], [], [], [], [959, 987, 1032, 1009], [959, 987, 1032, 1009], [], [], [], [981, 984, 1024, 1036, 1084, 1083, 1006, 1002, 1030, 1097, 959, 991, 974, 1038, 1072, 1001, 987, 1032, 1053, 1063, 1068, 969, 1060, 1000, 1022, 1085, 1046, 1061, 963, 1018, 958, 1041, 964, 971, 972, 1009, 1040, 1051, 1019, 1039, 978, 979, 1007, 988, 1054, 1048, 989, 1069, 1043, 993, 1082, 1092, 1047, 1015, 1016, 1096, 1080, 1058, 968, 1004, 1003, 1057, 982, 1020, 1014, 1028, 1077, 1066, 1076, 1075, 1089, 1094, 1029, 1045, 1011, 966, 1064, 1044, 1005, 975, 970, 1062, 1035, 1056], [], [], [], [], [], [], [], [], [], [], [981, 1024, 1036, 1084, 1083, 1006, 1002, 1030, 1097, 974, 1038, 1072, 1053, 1063, 1068, 969, 1060, 1000, 1022, 1085, 1046, 1061, 963, 1018, 958, 1041, 971, 972, 1040, 1051, 1019, 1039, 978, 1007, 988, 1048, 989, 1069, 1043, 993, 1082, 1092, 1047, 1015, 1016, 1080, 1058, 968, 1004, 1003, 1057, 982, 1020, 1014, 1028, 1077, 1075, 1089, 1094, 1029, 1045, 1011, 966, 1044, 1005, 975, 1062, 1035, 1056], [981, 1024, 1036, 1084, 1083, 1006, 1002, 1030, 1097, 974, 1038, 1072, 1053, 1063, 1068, 969, 1060, 1000, 1022, 1085, 1046, 1061, 963, 1018, 958, 1041, 971, 972, 1040, 1051, 1019, 1039, 978, 1007, 988, 1048, 989, 1069, 1043, 993, 1082, 1092, 1047, 1015, 1016, 1080, 1058, 968, 1004, 1003, 1057, 982, 1020, 1014, 1028, 1077, 1075, 1089, 1094, 1029, 1045, 1011, 966, 1044, 1005, 975, 1062, 1035, 1056], [], [], [], [], [], [], [], [], [981, 1024, 1036, 1084, 1083, 1006, 1002, 1030, 1097, 959, 991, 974, 1038, 1072, 987, 1032, 1063, 1068, 969, 1060, 1000, 1022, 1085, 1046, 1061, 963, 1018, 958, 1041, 971, 972, 1009, 1040, 1051, 1019, 1039, 978, 979, 1007, 988, 1054, 1048, 989, 1069, 1043, 993, 1082, 1092, 1047, 1015, 1096, 1080, 1058, 968, 1004, 1003, 1057, 982, 1020, 1014, 1028, 1077, 1075, 1089, 1094, 1029, 1045, 1011, 966, 1064, 1044, 1005, 975, 1062, 1035, 1056], [981, 1024, 1036, 1084, 1083, 1006, 1002, 1030, 1097, 959, 991, 974, 1038, 1072, 987, 1032, 1063, 1068, 969, 1060, 1000, 1022, 1085, 1046, 1061, 963, 1018, 958, 1041, 971, 972, 1009, 1040, 1051, 1019, 1039, 978, 979, 1007, 988, 1054, 1048, 989, 1069, 1043, 993, 1082, 1092, 1047, 1015, 1096, 1080, 1058, 968, 1004, 1003, 1057, 982, 1020, 1014, 1028, 1077, 1075, 1089, 1094, 1029, 1045, 1011, 966, 1064, 1044, 1005, 975, 1062, 1035, 1056], [], [], [], [], [], [], [], [981, 1024, 1036, 1084, 1083, 1006, 1002, 1030, 1097, 959, 974, 1038, 1072, 987, 1032, 1063, 1068, 969, 1060, 1000, 1022, 1085, 1046, 1061, 963, 1018, 958, 1041, 971, 972, 1009, 1040, 1051, 1019, 1039, 978, 979, 1007, 988, 1048, 989, 1069, 1043, 993, 1082, 1092, 1047, 1015, 1080, 1058, 968, 1004, 1003, 1057, 982, 1020, 1014, 1028, 1077, 1075, 1089, 1094, 1029, 1045, 1011, 966, 1064, 1044, 1005, 975, 1062, 1035, 1056], [981, 1024, 1036, 1084, 1083, 1006, 1002, 1030, 1097, 959, 974, 1038, 1072, 987, 1032, 1063, 1068, 969, 1060, 1000, 1022, 1085, 1046, 1061, 963, 1018, 958, 1041, 971, 972, 1009, 1040, 1051, 1019, 1039, 978, 979, 1007, 988, 1048, 989, 1069, 1043, 993, 1082, 1092, 1047, 1015, 1080, 1058, 968, 1004, 1003, 1057, 982, 1020, 1014, 1028, 1077, 1075, 1089, 1094, 1029, 1045, 1011, 966, 1064, 1044, 1005, 975, 1062, 1035, 1056], [], [], []]
