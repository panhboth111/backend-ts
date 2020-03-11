import { model, Schema, Document } from "mongoose";
import { ICredentials } from "../types/model";

const credentialSchema = new Schema({
  email: { type: String, required: true },
  pwd: { type: String, required: true },
  date: { type: Date, default: Date.now() }
});
const credentialModel = model<Document & ICredentials>(
  "Credential",
  credentialSchema
);
export default credentialModel;
