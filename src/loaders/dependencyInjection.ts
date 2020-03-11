import { Container } from "typedi";
import userModel from "../models/User";
import credentialModel from "../models/Credential";
import historyModel from "../models/History";
import streamModel from "../models/Stream";
import profileModel from "../models/Profile";
import coverModel from "../models/Cover";
export default () => {
  const models = [
    { name: "userModel", model: userModel },
    { name: "credentialModel", model: credentialModel },
    { name: "historyModel", model: historyModel },
    { name: "streamModel", model: streamModel },
    { name: "profileModel", model: profileModel },
    { name: "coverModel", model: coverModel }
  ];
  models.forEach(model => Container.set(model.name, model.model));
};
