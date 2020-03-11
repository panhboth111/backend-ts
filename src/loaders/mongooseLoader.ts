import { connect } from "mongoose";
import { DB_CONNECTION } from "../utilities/configs";

export default async (): Promise<any> => {
  const connection = await connect(DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  return connection.connection.db;
};
