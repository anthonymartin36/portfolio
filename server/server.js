"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Path = require("node:path");
var fruits_ts_1 = require("./routes/fruits.ts");
var server = (0, express_1.default)();
server.use(express_1.default.json());
server.use('/api/v1/fruits', fruits_ts_1.default);
if (process.env.NODE_ENV === 'production') {
    server.use(express_1.default.static(Path.resolve('public')));
    server.use('/assets', express_1.default.static(Path.resolve('./dist/assets')));
    server.get('*', function (req, res) {
        res.sendFile(Path.resolve('./dist/index.html'));
    });
}
exports.default = server;
