"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var streamSchema = new mongoose_1.Schema({
    streamCode: {
        type: String,
        required: true
    },
    streamTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isPrivate: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        default: ""
    },
    owner: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    streamFrom: {
        type: String,
        default: "Author's cam"
    }
});
var streamModel = mongoose_1.model("Stream", streamSchema);
exports.default = streamModel;
