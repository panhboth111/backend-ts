"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = __importDefault(require("../routes"));
var passport_1 = __importDefault(require("passport"));
exports.default = (function (app) {
    app.use(cors_1.default());
    app.use(body_parser_1.default.json());
    app.use("/", routes_1.default().publicRouter);
    app.use("/", passport_1.default.authenticate("jwt", { session: false }), routes_1.default().privateRouter);
});
