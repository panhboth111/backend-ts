"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var User_1 = __importDefault(require("../models/User"));
var Credential_1 = __importDefault(require("../models/Credential"));
var History_1 = __importDefault(require("../models/History"));
var Stream_1 = __importDefault(require("../models/Stream"));
var Profile_1 = __importDefault(require("../models/Profile"));
var Cover_1 = __importDefault(require("../models/Cover"));
exports.default = (function () {
    var models = [
        { name: "userModel", model: User_1.default },
        { name: "credentialModel", model: Credential_1.default },
        { name: "historyModel", model: History_1.default },
        { name: "streamModel", model: Stream_1.default },
        { name: "profileModel", model: Profile_1.default },
        { name: "coverModel", model: Cover_1.default }
    ];
    models.forEach(function (model) { return typedi_1.Container.set(model.name, model.model); });
});
