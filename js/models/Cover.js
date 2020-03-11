"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var coverSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    pic: { type: String, default: "" }
});
var coverModel = mongoose_1.model("Cover", coverSchema);
exports.default = coverModel;
