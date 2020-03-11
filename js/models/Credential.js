"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var credentialSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    pwd: { type: String, required: true },
    date: { type: Date, default: Date.now() }
});
var credentialModel = mongoose_1.model("Credential", credentialSchema);
exports.default = credentialModel;
