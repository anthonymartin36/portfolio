"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_ts_1 = require("./server.ts");
var PORT = process.env.PORT || 3000;
server_ts_1.default.listen(PORT, function () {
    // eslint-disable-next-line no-console
    console.log('Server listening on port', PORT);
});
