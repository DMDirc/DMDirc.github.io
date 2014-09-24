var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":105,"id":11634,"methods":[{"el":53,"sc":5,"sl":44},{"el":58,"sc":5,"sl":55},{"el":63,"sc":5,"sl":60},{"el":67,"sc":5,"sl":65},{"el":71,"sc":5,"sl":69},{"el":76,"sc":5,"sl":73},{"el":88,"sc":5,"sl":78},{"el":93,"sc":5,"sl":90},{"el":103,"sc":5,"sl":95}],"name":"Alias","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_105":{"methods":[{"sl":44},{"sl":55},{"sl":65},{"sl":69}],"name":"testAddAlias","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66},{"sl":70}]},"test_122":{"methods":[{"sl":55}],"name":"testRemovedAliasByCopyNotReturnedByGetters","pass":true,"statements":[{"sl":57}]},"test_195":{"methods":[{"sl":55},{"sl":65},{"sl":69},{"sl":73},{"sl":78},{"sl":90}],"name":"testRemoveAliasListener","pass":true,"statements":[{"sl":57},{"sl":66},{"sl":70},{"sl":75},{"sl":80},{"sl":83},{"sl":84},{"sl":92}]},"test_210":{"methods":[{"sl":44},{"sl":55},{"sl":65},{"sl":69}],"name":"testCommandChars","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66},{"sl":70}]},"test_234":{"methods":[{"sl":55},{"sl":90}],"name":"testAddingAliasWithSameNameReplacesExisting","pass":true,"statements":[{"sl":57},{"sl":92}]},"test_237":{"methods":[{"sl":44},{"sl":55},{"sl":65}],"name":"testInsufficientArgsSingular","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66}]},"test_269":{"methods":[{"sl":44},{"sl":55},{"sl":65},{"sl":69},{"sl":78},{"sl":90}],"name":"testEditAlias","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66},{"sl":70},{"sl":80},{"sl":83},{"sl":84},{"sl":92}]},"test_284":{"methods":[{"sl":44},{"sl":65},{"sl":69}],"name":"testCarriesForwardSilence","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":66},{"sl":70}]},"test_298":{"methods":[{"sl":44},{"sl":55},{"sl":65},{"sl":69},{"sl":73},{"sl":78}],"name":"testAddAliasListener","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66},{"sl":70},{"sl":75},{"sl":80},{"sl":83},{"sl":84}]},"test_329":{"methods":[{"sl":44},{"sl":55},{"sl":65}],"name":"testInsufficientArgsPlural","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66}]},"test_332":{"methods":[{"sl":55},{"sl":65},{"sl":69},{"sl":73},{"sl":78},{"sl":90}],"name":"testSelectedAliasToNull","pass":true,"statements":[{"sl":57},{"sl":66},{"sl":70},{"sl":75},{"sl":80},{"sl":83},{"sl":84},{"sl":92}]},"test_362":{"methods":[{"sl":55},{"sl":90}],"name":"testAddedAliasReturnedByGetters","pass":true,"statements":[{"sl":57},{"sl":92}]},"test_376":{"methods":[{"sl":44},{"sl":55},{"sl":65},{"sl":69},{"sl":73},{"sl":78},{"sl":90}],"name":"testRenameAlias","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66},{"sl":70},{"sl":75},{"sl":80},{"sl":83},{"sl":84},{"sl":92}]},"test_391":{"methods":[{"sl":44},{"sl":55},{"sl":65},{"sl":69},{"sl":73},{"sl":78},{"sl":90}],"name":"testEditSelectedAlias","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66},{"sl":70},{"sl":75},{"sl":80},{"sl":83},{"sl":84},{"sl":92}]},"test_402":{"methods":[{"sl":55},{"sl":65},{"sl":69},{"sl":73},{"sl":78}],"name":"testAddedAliasRegisteredWithController","pass":true,"statements":[{"sl":57},{"sl":66},{"sl":70},{"sl":75},{"sl":80},{"sl":83},{"sl":84}]},"test_433":{"methods":[{"sl":44},{"sl":55},{"sl":65},{"sl":69},{"sl":73},{"sl":78}],"name":"testRemoveListener","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66},{"sl":70},{"sl":75},{"sl":80},{"sl":83},{"sl":84}]},"test_436":{"methods":[{"sl":55},{"sl":65},{"sl":69},{"sl":73},{"sl":78},{"sl":90}],"name":"testRemoveAlias","pass":true,"statements":[{"sl":57},{"sl":66},{"sl":70},{"sl":75},{"sl":80},{"sl":83},{"sl":84},{"sl":92}]},"test_486":{"methods":[{"sl":55}],"name":"testRemovedAliasNotReturnedByGetters","pass":true,"statements":[{"sl":57}]},"test_508":{"methods":[{"sl":44},{"sl":65},{"sl":69}],"name":"testBasicAlias","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":66},{"sl":70}]},"test_525":{"methods":[{"sl":55},{"sl":65},{"sl":69},{"sl":73},{"sl":78},{"sl":90}],"name":"testSelectedAliasNotNull","pass":true,"statements":[{"sl":57},{"sl":66},{"sl":70},{"sl":75},{"sl":80},{"sl":83},{"sl":84},{"sl":92}]},"test_529":{"methods":[{"sl":55},{"sl":65},{"sl":69},{"sl":73},{"sl":78},{"sl":90}],"name":"testGetAliasExists","pass":true,"statements":[{"sl":57},{"sl":66},{"sl":70},{"sl":75},{"sl":80},{"sl":83},{"sl":84},{"sl":92}]},"test_53":{"methods":[{"sl":44},{"sl":55},{"sl":65},{"sl":69}],"name":"testSimpleAlias","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66},{"sl":70}]},"test_585":{"methods":[{"sl":44},{"sl":55},{"sl":65},{"sl":69},{"sl":73},{"sl":78},{"sl":90}],"name":"testRenameSelectedAlias","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66},{"sl":70},{"sl":75},{"sl":80},{"sl":83},{"sl":84},{"sl":92}]},"test_587":{"methods":[{"sl":44},{"sl":55},{"sl":65},{"sl":69},{"sl":73},{"sl":78},{"sl":90}],"name":"testRenameAliasListener","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66},{"sl":70},{"sl":75},{"sl":80},{"sl":83},{"sl":84},{"sl":92}]},"test_591":{"methods":[{"sl":55},{"sl":65},{"sl":69},{"sl":73},{"sl":78}],"name":"testRemovedAliasUnregisteredWithController","pass":true,"statements":[{"sl":57},{"sl":66},{"sl":70},{"sl":75},{"sl":80},{"sl":83},{"sl":84}]},"test_601":{"methods":[{"sl":44},{"sl":55},{"sl":65},{"sl":69}],"name":"testMultilineResponse","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66},{"sl":70}]},"test_618":{"methods":[{"sl":44},{"sl":65},{"sl":69}],"name":"testSubstitutions","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":66},{"sl":70}]},"test_644":{"methods":[{"sl":44},{"sl":55},{"sl":65},{"sl":69},{"sl":73},{"sl":78},{"sl":90}],"name":"testEditAliasListener","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66},{"sl":70},{"sl":75},{"sl":80},{"sl":83},{"sl":84},{"sl":92}]},"test_661":{"methods":[{"sl":55},{"sl":65},{"sl":69},{"sl":90}],"name":"testSelectedAliasInitiallyNotNull","pass":true,"statements":[{"sl":57},{"sl":66},{"sl":70},{"sl":92}]},"test_667":{"methods":[{"sl":44},{"sl":55},{"sl":65},{"sl":69}],"name":"testCommandAndSilenceChars","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66},{"sl":70}]},"test_696":{"methods":[{"sl":55}],"name":"testRemovedAliasByNameNotReturnedByGetters","pass":true,"statements":[{"sl":57}]},"test_720":{"methods":[{"sl":55},{"sl":65},{"sl":69},{"sl":90}],"name":"testGetAliasNotExists","pass":true,"statements":[{"sl":57},{"sl":66},{"sl":70},{"sl":92}]},"test_80":{"methods":[{"sl":44},{"sl":55},{"sl":65},{"sl":69}],"name":"testSilenceChars","pass":true,"statements":[{"sl":49},{"sl":50},{"sl":51},{"sl":52},{"sl":57},{"sl":66},{"sl":70}]},"test_99":{"methods":[{"sl":55},{"sl":65},{"sl":69},{"sl":90}],"name":"testgetAliases","pass":true,"statements":[{"sl":57},{"sl":66},{"sl":70},{"sl":92}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [644, 269, 53, 298, 284, 105, 376, 601, 508, 210, 587, 433, 237, 618, 80, 391, 585, 667, 329], [], [], [], [], [644, 269, 53, 298, 284, 105, 376, 601, 508, 210, 587, 433, 237, 618, 80, 391, 585, 667, 329], [644, 269, 53, 298, 284, 105, 376, 601, 508, 210, 587, 433, 237, 618, 80, 391, 585, 667, 329], [644, 269, 53, 298, 284, 105, 376, 601, 508, 210, 587, 433, 237, 618, 80, 391, 585, 667, 329], [644, 269, 53, 298, 284, 105, 376, 601, 508, 210, 587, 433, 237, 618, 80, 391, 585, 667, 329], [], [], [122, 436, 362, 644, 195, 591, 269, 529, 53, 298, 696, 105, 99, 376, 601, 332, 210, 587, 402, 433, 486, 525, 661, 720, 237, 80, 391, 234, 585, 667, 329], [], [122, 436, 362, 644, 195, 591, 269, 529, 53, 298, 696, 105, 99, 376, 601, 332, 210, 587, 402, 433, 486, 525, 661, 720, 237, 80, 391, 234, 585, 667, 329], [], [], [], [], [], [], [], [436, 644, 195, 591, 269, 529, 53, 298, 284, 105, 99, 376, 601, 508, 332, 210, 587, 402, 433, 525, 661, 720, 237, 618, 80, 391, 585, 667, 329], [436, 644, 195, 591, 269, 529, 53, 298, 284, 105, 99, 376, 601, 508, 332, 210, 587, 402, 433, 525, 661, 720, 237, 618, 80, 391, 585, 667, 329], [], [], [436, 644, 195, 591, 269, 529, 53, 298, 284, 105, 99, 376, 601, 508, 332, 210, 587, 402, 433, 525, 661, 720, 618, 80, 391, 585, 667], [436, 644, 195, 591, 269, 529, 53, 298, 284, 105, 99, 376, 601, 508, 332, 210, 587, 402, 433, 525, 661, 720, 618, 80, 391, 585, 667], [], [], [436, 644, 195, 591, 529, 298, 376, 332, 587, 402, 433, 525, 391, 585], [], [436, 644, 195, 591, 529, 298, 376, 332, 587, 402, 433, 525, 391, 585], [], [], [436, 644, 195, 591, 269, 529, 298, 376, 332, 587, 402, 433, 525, 391, 585], [], [436, 644, 195, 591, 269, 529, 298, 376, 332, 587, 402, 433, 525, 391, 585], [], [], [436, 644, 195, 591, 269, 529, 298, 376, 332, 587, 402, 433, 525, 391, 585], [436, 644, 195, 591, 269, 529, 298, 376, 332, 587, 402, 433, 525, 391, 585], [], [], [], [], [], [436, 362, 644, 195, 269, 529, 99, 376, 332, 587, 525, 661, 720, 391, 234, 585], [], [436, 362, 644, 195, 269, 529, 99, 376, 332, 587, 525, 661, 720, 391, 234, 585], [], [], [], [], [], [], [], [], [], [], [], [], []]
