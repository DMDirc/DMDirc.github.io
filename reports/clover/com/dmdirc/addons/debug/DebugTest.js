var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":143,"id":31098,"methods":[{"el":63,"sc":5,"sl":59},{"el":74,"sc":5,"sl":66},{"el":85,"sc":5,"sl":77},{"el":101,"sc":5,"sl":88},{"el":117,"sc":5,"sl":104},{"el":141,"sc":5,"sl":139}],"name":"DebugTest","sl":50},{"el":137,"id":31131,"methods":[{"el":125,"sc":9,"sl":123},{"el":130,"sc":9,"sl":127},{"el":135,"sc":9,"sl":132}],"name":"DebugTest.CommandArgsMatcher","sl":119}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1149":{"methods":[{"sl":77}],"name":"testInvalidArg","pass":true,"statements":[{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":84}]},"test_1150":{"methods":[{"sl":104},{"sl":123},{"sl":127},{"sl":139}],"name":"testCommandWithArgs","pass":true,"statements":[{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":112},{"sl":114},{"sl":115},{"sl":124},{"sl":129},{"sl":140}]},"test_1151":{"methods":[{"sl":88},{"sl":123},{"sl":127},{"sl":139}],"name":"testCommandNoArgs","pass":true,"statements":[{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":98},{"sl":99},{"sl":124},{"sl":129},{"sl":140}]},"test_1152":{"methods":[{"sl":66}],"name":"testNoArgs","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1152], [], [1152], [1152], [1152], [1152], [1152], [], [], [], [], [1149], [], [1149], [1149], [1149], [], [1149], [1149], [], [], [], [1151], [], [1151], [1151], [1151], [1151], [1151], [], [1151], [], [1151], [1151], [], [], [], [], [1150], [], [1150], [1150], [1150], [1150], [1150], [], [1150], [], [1150], [1150], [], [], [], [], [], [], [], [1151, 1150], [1151, 1150], [], [], [1151, 1150], [], [1151, 1150], [], [], [], [], [], [], [], [], [], [1151, 1150], [1151, 1150], [], [], []]
