"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = require("knex");
var knexfile_js_1 = require("./knexfile.js");
var env = process.env.NODE_ENV || 'development';
var connection = knex_1.default.default(knexfile_js_1.default[env]);
exports.default = connection;
