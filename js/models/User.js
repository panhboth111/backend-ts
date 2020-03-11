"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    isStreaming: { type: Boolean, default: false }
});
var userModel = mongoose_1.model("User", userSchema);
exports.default = userModel;
