"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
exports.default = (function (router) {
    router.post("/auth/signup", function (req, res) {
        passport_1.default.authenticate("signup", { session: false }, function (err, result) {
            return res.json(result);
        })(req, res);
    });
    router.post("/auth/signin", function (req, res) {
        passport_1.default.authenticate("signin", { session: false }, function (err, result) {
            return res.json(result);
        })(req, res);
    });
});
