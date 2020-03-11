"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (router) {
    router.get("/users", function (req, res) {
        console.log("here");
        res.send("hiiii");
    });
});
