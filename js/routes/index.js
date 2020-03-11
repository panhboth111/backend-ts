"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = __importDefault(require("./auth"));
var user_1 = __importDefault(require("./user"));
exports.default = (function () {
    var publicRouter = express_1.Router();
    var privateRouter = express_1.Router();
    auth_1.default(publicRouter);
    user_1.default(privateRouter);
    return { publicRouter: publicRouter, privateRouter: privateRouter };
});
