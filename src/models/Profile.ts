import { model, Schema, Document } from "mongoose";
import { IProfile } from "../types/model";

const profileSchema = new Schema({
  email: { type: String, required: true },
  pic: { type: String, default: "" }
});
const profileModel = model<Document & IProfile>("Profile", profileSchema);
export default profileModel;
