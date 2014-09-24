var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":168,"id":76,"methods":[{"el":67,"sc":5,"sl":61},{"el":77,"sc":5,"sl":72},{"el":87,"sc":5,"sl":82},{"el":103,"sc":5,"sl":94},{"el":117,"sc":5,"sl":110},{"el":126,"sc":5,"sl":124},{"el":135,"sc":5,"sl":133},{"el":144,"sc":5,"sl":142}],"name":"AutoCommandManager","sl":44},{"el":155,"id":108,"methods":[{"el":154,"sc":9,"sl":151}],"name":"AutoCommandManager.GlobalCommandPredicate","sl":149},{"el":166,"id":110,"methods":[{"el":165,"sc":9,"sl":162}],"name":"AutoCommandManager.ConnectionCommandPredicate","sl":160}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_232":{"methods":[{"sl":94},{"sl":110},{"sl":124}],"name":"testRemoveAutoCommand","pass":true,"statements":[{"sl":95},{"sl":96},{"sl":98},{"sl":102},{"sl":111},{"sl":112},{"sl":114},{"sl":125}]},"test_306":{"methods":[{"sl":72},{"sl":94}],"name":"testStart","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":75},{"sl":95},{"sl":96},{"sl":98},{"sl":102}]},"test_355":{"methods":[{"sl":94}],"name":"testAddWhenStopped","pass":true,"statements":[{"sl":95},{"sl":96},{"sl":98},{"sl":102}]},"test_37":{"methods":[{"sl":94},{"sl":124}],"name":"testGetAutoCommands","pass":true,"statements":[{"sl":95},{"sl":96},{"sl":98},{"sl":102},{"sl":125}]},"test_419":{"methods":[{"sl":72},{"sl":94}],"name":"testAddWhenStarted","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":102}]},"test_450":{"methods":[{"sl":72},{"sl":94},{"sl":110}],"name":"testRemoveWhenStarted","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":102},{"sl":111},{"sl":112},{"sl":114},{"sl":115}]},"test_468":{"methods":[{"sl":82},{"sl":94}],"name":"testStop","pass":true,"statements":[{"sl":83},{"sl":84},{"sl":85},{"sl":95},{"sl":96},{"sl":98},{"sl":102}]},"test_542":{"methods":[{"sl":94},{"sl":124},{"sl":133},{"sl":151}],"name":"testGetGlobalAutoCommands","pass":true,"statements":[{"sl":95},{"sl":96},{"sl":98},{"sl":102},{"sl":125},{"sl":134},{"sl":153}]},"test_574":{"methods":[{"sl":110}],"name":"testRemoveWhenStopped","pass":true,"statements":[{"sl":111},{"sl":112},{"sl":114}]},"test_684":{"methods":[{"sl":94},{"sl":124},{"sl":142},{"sl":162}],"name":"testGetConnectionAutoCommands","pass":true,"statements":[{"sl":95},{"sl":96},{"sl":98},{"sl":102},{"sl":125},{"sl":143},{"sl":164}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [419, 450, 306], [419, 450, 306], [419, 450, 306], [306], [], [], [], [], [], [], [468], [468], [468], [468], [], [], [], [], [], [], [], [], [37, 419, 450, 684, 542, 232, 306, 355, 468], [37, 419, 450, 684, 542, 232, 306, 355, 468], [37, 419, 450, 684, 542, 232, 306, 355, 468], [], [37, 419, 450, 684, 542, 232, 306, 355, 468], [419, 450], [], [], [37, 419, 450, 684, 542, 232, 306, 355, 468], [], [], [], [], [], [], [], [450, 574, 232], [450, 574, 232], [450, 574, 232], [], [450, 574, 232], [450], [], [], [], [], [], [], [], [], [37, 684, 542, 232], [37, 684, 542, 232], [], [], [], [], [], [], [], [542], [542], [], [], [], [], [], [], [], [684], [684], [], [], [], [], [], [], [], [542], [], [542], [], [], [], [], [], [], [], [], [684], [], [684], [], [], [], []]
