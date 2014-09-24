var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":442,"id":953,"methods":[{"el":93,"sc":5,"sl":84},{"el":121,"sc":5,"sl":107},{"el":169,"sc":5,"sl":132},{"el":189,"sc":5,"sl":179},{"el":198,"sc":5,"sl":196},{"el":208,"sc":5,"sl":205},{"el":218,"sc":5,"sl":216},{"el":228,"sc":5,"sl":226},{"el":238,"sc":5,"sl":236},{"el":247,"sc":5,"sl":245},{"el":257,"sc":5,"sl":254},{"el":266,"sc":5,"sl":264},{"el":276,"sc":5,"sl":273},{"el":285,"sc":5,"sl":283},{"el":295,"sc":5,"sl":292},{"el":304,"sc":5,"sl":302},{"el":314,"sc":5,"sl":311},{"el":323,"sc":5,"sl":321},{"el":333,"sc":5,"sl":330},{"el":343,"sc":5,"sl":341},{"el":355,"sc":5,"sl":352},{"el":365,"sc":5,"sl":362},{"el":376,"sc":5,"sl":374},{"el":388,"sc":5,"sl":385},{"el":400,"sc":5,"sl":398},{"el":414,"sc":5,"sl":412},{"el":424,"sc":5,"sl":422},{"el":432,"sc":5,"sl":430},{"el":440,"sc":5,"sl":434}],"name":"ActionModel","sl":41}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_127":{"methods":[{"sl":84},{"sl":283},{"sl":292}],"name":"testResponse","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":284},{"sl":293},{"sl":294}]},"test_160":{"methods":[{"sl":84},{"sl":245},{"sl":254}],"name":"testTriggers","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":246},{"sl":255},{"sl":256}]},"test_322":{"methods":[{"sl":84},{"sl":107},{"sl":179},{"sl":352}],"name":"testTest","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":120},{"sl":181},{"sl":183},{"sl":184},{"sl":185},{"sl":188},{"sl":353}]},"test_323":{"methods":[{"sl":84},{"sl":107},{"sl":330},{"sl":422},{"sl":430}],"name":"testSetName","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":120},{"sl":331},{"sl":332},{"sl":423},{"sl":431}]},"test_397":{"methods":[{"sl":84},{"sl":107},{"sl":311},{"sl":422},{"sl":430}],"name":"testSetGroup","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":120},{"sl":312},{"sl":313},{"sl":423},{"sl":431}]},"test_45":{"methods":[{"sl":84},{"sl":321},{"sl":330}],"name":"testName","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":322},{"sl":331},{"sl":332}]},"test_466":{"methods":[{"sl":84}],"name":"testMultipleGroups","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92}]},"test_485":{"methods":[{"sl":84},{"sl":264},{"sl":273}],"name":"testNewFormat","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":265},{"sl":274},{"sl":275}]},"test_528":{"methods":[{"sl":84},{"sl":196},{"sl":245},{"sl":283},{"sl":341}],"name":"testRead","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":197},{"sl":246},{"sl":284},{"sl":342}]},"test_624":{"methods":[{"sl":84},{"sl":107},{"sl":422},{"sl":430}],"name":"testSave","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":120},{"sl":423},{"sl":431}]},"test_660":{"methods":[{"sl":84},{"sl":196},{"sl":205}],"name":"testConditions","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":197},{"sl":206},{"sl":207}]},"test_664":{"methods":[{"sl":84},{"sl":302},{"sl":311}],"name":"testGroup","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":303},{"sl":312},{"sl":313}]},"test_683":{"methods":[{"sl":84},{"sl":107},{"sl":179},{"sl":352}],"name":"testTestNoCondTree","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":120},{"sl":181},{"sl":183},{"sl":184},{"sl":185},{"sl":188},{"sl":353}]},"test_731":{"methods":[{"sl":84},{"sl":107},{"sl":302},{"sl":422},{"sl":430}],"name":"testDelete","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":120},{"sl":303},{"sl":423},{"sl":431}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [127, 528, 466, 45, 683, 485, 664, 660, 322, 624, 160, 397, 323, 731], [], [], [], [], [127, 528, 466, 45, 683, 485, 664, 660, 322, 624, 160, 397, 323, 731], [127, 528, 466, 45, 683, 485, 664, 660, 322, 624, 160, 397, 323, 731], [127, 528, 466, 45, 683, 485, 664, 660, 322, 624, 160, 397, 323, 731], [127, 528, 466, 45, 683, 485, 664, 660, 322, 624, 160, 397, 323, 731], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [683, 322, 624, 397, 323, 731], [], [], [], [], [], [], [683, 322, 624, 397, 323, 731], [683, 322, 624, 397, 323, 731], [683, 322, 624, 397, 323, 731], [683, 322, 624, 397, 323, 731], [683, 322, 624, 397, 323, 731], [683, 322, 624, 397, 323, 731], [683, 322, 624, 397, 323, 731], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [683, 322], [], [683, 322], [], [683, 322], [683, 322], [683, 322], [], [], [683, 322], [], [], [], [], [], [], [], [528, 660], [528, 660], [], [], [], [], [], [], [], [660], [660], [660], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [528, 160], [528, 160], [], [], [], [], [], [], [], [160], [160], [160], [], [], [], [], [], [], [], [485], [485], [], [], [], [], [], [], [], [485], [485], [485], [], [], [], [], [], [], [], [127, 528], [127, 528], [], [], [], [], [], [], [], [127], [127], [127], [], [], [], [], [], [], [], [664, 731], [664, 731], [], [], [], [], [], [], [], [664, 397], [664, 397], [664, 397], [], [], [], [], [], [], [], [45], [45], [], [], [], [], [], [], [], [45, 323], [45, 323], [45, 323], [], [], [], [], [], [], [], [], [528], [528], [], [], [], [], [], [], [], [], [], [683, 322], [683, 322], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [624, 397, 323, 731], [624, 397, 323, 731], [], [], [], [], [], [], [624, 397, 323, 731], [624, 397, 323, 731], [], [], [], [], [], [], [], [], [], [], []]
