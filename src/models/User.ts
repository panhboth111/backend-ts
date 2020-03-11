import { model, Schema, Document } from "mongoose";
import { IUser } from "../types/model";

const userSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  isStreaming: { type: Boolean, default: false }
});
const userModel = model<Document & IUser>("User", userSchema);
export default userModel;
