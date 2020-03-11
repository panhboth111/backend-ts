import dotenv from "dotenv";
const envFound = dotenv.config();

export const DB_CONNECTION = `${process.env.DB_CONNECTION}`;
export const PORT = parseInt(`${process.env.PORT}`);
export const jwtSecret = `${process.env.jwtSecret}`;
