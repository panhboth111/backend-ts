import { Router } from "express";
import authRoute from "./auth";
import userRoute from "./user";
export default () => {
  const publicRouter = Router();
  const privateRouter = Router();
  authRoute(publicRouter);
  userRoute(privateRouter);
  return { publicRouter, privateRouter };
};
