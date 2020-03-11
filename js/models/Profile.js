"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var profileSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    pic: { type: String, default: "" }
});
var profileModel = mongoose_1.model("Profile", profileSchema);
exports.default = profileModel;
