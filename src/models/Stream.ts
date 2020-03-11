import { model, Schema, Document } from "mongoose";
import { IStream } from "../types/model";

const streamSchema = new Schema({
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
const streamModel = model<Document & IStream>("Stream", streamSchema);
export default streamModel;
