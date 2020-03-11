"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var envFound = dotenv_1.default.config();
exports.DB_CONNECTION = "" + process.env.DB_CONNECTION;
exports.PORT = parseInt("" + process.env.PORT);
exports.jwtSecret = "" + process.env.jwtSecret;
