import { model, Schema, Document } from "mongoose";
import { IHistory } from "../types/model";

const historySchema = new Schema({
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
const historyModel = model<Document & IHistory>("History", historySchema);
export default historyModel;
