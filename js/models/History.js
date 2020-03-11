"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var historySchema = new mongoose_1.Schema({
    action: {
        type: String
    },
    streamCode: {
        type: String
    },
    streamTitle: {
        type: String
    },
    email: {
        type: String
    }
});
var historyModel = mongoose_1.model("History", historySchema);
exports.default = historyModel;
