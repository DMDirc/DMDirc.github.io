var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":120,"id":11299,"methods":[{"el":59,"sc":5,"sl":54},{"el":69,"sc":5,"sl":61},{"el":84,"sc":5,"sl":71},{"el":100,"sc":5,"sl":86},{"el":119,"sc":5,"sl":102}],"name":"KickReasonTest","sl":49}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_243":{"methods":[{"sl":86}],"name":"testWithReason","pass":true,"statements":[{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":93},{"sl":94},{"sl":96},{"sl":99}]},"test_484":{"methods":[{"sl":102}],"name":"testWithoutReason","pass":true,"statements":[{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":110},{"sl":111},{"sl":112},{"sl":113},{"sl":115},{"sl":118}]},"test_544":{"methods":[{"sl":71}],"name":"testUnknown","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":75},{"sl":77},{"sl":78},{"sl":80},{"sl":83}]},"test_623":{"methods":[{"sl":61}],"name":"testUsage","pass":true,"statements":[{"sl":63},{"sl":64},{"sl":65},{"sl":68}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [623], [], [623], [623], [623], [], [], [623], [], [], [544], [], [544], [544], [544], [], [544], [544], [], [544], [], [], [544], [], [], [243], [], [243], [243], [243], [243], [], [243], [243], [], [243], [], [], [243], [], [], [484], [], [484], [484], [484], [484], [484], [], [484], [484], [484], [484], [], [484], [], [], [484], [], []]
