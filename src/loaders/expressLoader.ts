import * as express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Router from "../routes";
import passport from "passport";
export default (app: express.Application) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/", Router().publicRouter);
  app.use(
    "/",
    passport.authenticate("jwt", { session: false }),
    Router().privateRouter
  );
};
