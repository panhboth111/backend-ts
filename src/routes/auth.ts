import { Router } from "express";
import passport from "passport";

export default (router: Router) => {
  router.post("/auth/signup", (req, res) => {
    passport.authenticate("signup", { session: false }, (err, result) =>
      res.json(result)
    )(req, res);
  });
  router.post("/auth/signin", (req, res) => {
    passport.authenticate("signin", { session: false }, (err, result) =>
      res.json(result)
    )(req, res);
  });
};
