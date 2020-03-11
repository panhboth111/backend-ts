import { model, Schema, Document } from "mongoose";
import { ICover } from "../types/model";

const coverSchema = new Schema({
  email: { type: String, required: true },
  pic: { type: String, default: "" }
});
const coverModel = model<Document & ICover>("Cover", coverSchema);
export default coverModel;
