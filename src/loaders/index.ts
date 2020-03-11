import { Application } from "express";
import expressLoader from "./expressLoader";
import mongooseLoader from "./mongooseLoader";
import dependencyInjection from "./dependencyInjection";
import passportLoader from "./passportLoader";
export default async (app: Application) => {
  await mongooseLoader();
  console.log("mongoose initialized");
  await dependencyInjection();
  console.log("Dependencies injected");
  await expressLoader(app);
  console.log("express loaded");
  await passportLoader(app);
  console.log("passport loaded");
};
