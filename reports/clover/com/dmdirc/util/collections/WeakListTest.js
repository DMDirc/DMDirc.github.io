var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":284,"id":21486,"methods":[{"el":43,"sc":5,"sl":37},{"el":50,"sc":5,"sl":45},{"el":58,"sc":5,"sl":52},{"el":67,"sc":5,"sl":60},{"el":79,"sc":5,"sl":69},{"el":88,"sc":5,"sl":81},{"el":96,"sc":5,"sl":90},{"el":111,"sc":5,"sl":101},{"el":126,"sc":5,"sl":116},{"el":142,"sc":5,"sl":131},{"el":157,"sc":5,"sl":144},{"el":169,"sc":5,"sl":159},{"el":181,"sc":5,"sl":171},{"el":193,"sc":5,"sl":183},{"el":207,"sc":5,"sl":195},{"el":219,"sc":5,"sl":209},{"el":228,"sc":5,"sl":221},{"el":241,"sc":5,"sl":230},{"el":254,"sc":5,"sl":243},{"el":269,"sc":5,"sl":256},{"el":282,"sc":5,"sl":271}],"name":"WeakListTest","sl":35}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_764":{"methods":[{"sl":52}],"name":"testAddInt","pass":true,"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":57}]},"test_768":{"methods":[{"sl":81}],"name":"testGet","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87}]},"test_778":{"methods":[{"sl":183}],"name":"testRemoveAll","pass":true,"statements":[{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":191},{"sl":192}]},"test_787":{"methods":[{"sl":101}],"name":"testToArray0args","pass":true,"statements":[{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":110}]},"test_793":{"methods":[{"sl":209}],"name":"testClear","pass":true,"statements":[{"sl":211},{"sl":212},{"sl":213},{"sl":214},{"sl":215},{"sl":216},{"sl":217},{"sl":218}]},"test_806":{"methods":[{"sl":195}],"name":"testRetainAll","pass":true,"statements":[{"sl":197},{"sl":198},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":206}]},"test_811":{"methods":[{"sl":271}],"name":"testSubList","pass":true,"statements":[{"sl":273},{"sl":274},{"sl":275},{"sl":276},{"sl":277},{"sl":278},{"sl":279},{"sl":280},{"sl":281}]},"test_819":{"methods":[{"sl":131}],"name":"testContainsAllAddAll","pass":true,"statements":[{"sl":133},{"sl":134},{"sl":135},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":140},{"sl":141}]},"test_836":{"methods":[{"sl":45}],"name":"testAdd","pass":true,"statements":[{"sl":47},{"sl":48},{"sl":49}]},"test_839":{"methods":[{"sl":37}],"name":"testIsEmpty","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":42}]},"test_845":{"methods":[{"sl":90}],"name":"testContains","pass":true,"statements":[{"sl":92},{"sl":93},{"sl":94},{"sl":95}]},"test_881":{"methods":[{"sl":159}],"name":"testIndexOf","pass":true,"statements":[{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":168}]},"test_882":{"methods":[{"sl":116}],"name":"testToArrayGenericType","pass":true,"statements":[{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125}]},"test_892":{"methods":[{"sl":60}],"name":"testRemove","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66}]},"test_901":{"methods":[{"sl":230}],"name":"testIterator","pass":true,"statements":[{"sl":232},{"sl":233},{"sl":234},{"sl":235},{"sl":236},{"sl":237},{"sl":238},{"sl":239},{"sl":240}]},"test_921":{"methods":[{"sl":144}],"name":"testAddAllIntCollection","pass":true,"statements":[{"sl":146},{"sl":147},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":153},{"sl":154},{"sl":155},{"sl":156}]},"test_932":{"methods":[{"sl":221}],"name":"testSet","pass":true,"statements":[{"sl":223},{"sl":224},{"sl":225},{"sl":226},{"sl":227}]},"test_938":{"methods":[{"sl":243}],"name":"testListIterator0args","pass":true,"statements":[{"sl":245},{"sl":246},{"sl":247},{"sl":248},{"sl":249},{"sl":250},{"sl":251},{"sl":252},{"sl":253}]},"test_941":{"methods":[{"sl":256}],"name":"testListIteratorInt","pass":true,"statements":[{"sl":258},{"sl":259}]},"test_942":{"methods":[{"sl":171}],"name":"testLastIndexOf","pass":true,"statements":[{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":180}]},"test_949":{"methods":[{"sl":69}],"name":"testRemoveInt","pass":true,"statements":[{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [839], [], [839], [839], [839], [839], [], [], [836], [], [836], [836], [836], [], [], [764], [], [764], [764], [764], [764], [], [], [892], [], [892], [892], [892], [892], [892], [], [], [949], [], [949], [949], [949], [949], [949], [949], [949], [949], [], [], [768], [], [768], [768], [768], [768], [768], [], [], [845], [], [845], [845], [845], [845], [], [], [], [], [], [787], [], [787], [787], [787], [787], [787], [787], [787], [787], [], [], [], [], [], [882], [], [882], [882], [882], [882], [882], [882], [882], [882], [], [], [], [], [], [819], [], [819], [819], [819], [819], [819], [819], [819], [819], [819], [], [], [921], [], [921], [921], [921], [921], [921], [921], [921], [921], [921], [921], [921], [], [], [881], [], [881], [881], [881], [881], [881], [881], [881], [881], [], [], [942], [], [942], [942], [942], [942], [942], [942], [942], [942], [], [], [778], [], [778], [778], [778], [778], [778], [778], [778], [778], [], [], [806], [], [806], [806], [806], [806], [806], [806], [806], [806], [806], [806], [], [], [793], [], [793], [793], [793], [793], [793], [793], [793], [793], [], [], [932], [], [932], [932], [932], [932], [932], [], [], [901], [], [901], [901], [901], [901], [901], [901], [901], [901], [901], [], [], [938], [], [938], [938], [938], [938], [938], [938], [938], [938], [938], [], [], [941], [], [941], [941], [], [], [], [], [], [], [], [], [], [], [], [811], [], [811], [811], [811], [811], [811], [811], [811], [811], [811], [], [], []]
