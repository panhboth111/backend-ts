import { jwtSecret } from "../utilities/configs";
import AuthService from "../services/AuthService";
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import {
  Strategy as LocalStrategy,
  IStrategyOptionsWithRequest
} from "passport-local";
import { Container } from "typedi";
import { Application } from "express";
import jwt from "jsonwebtoken";

export default (app: Application) => {
  const authService = Container.get(AuthService);
  app.use(passport.initialize());
  const Configs = {
    usernameField: "email",
    passwordField: "pwd",
    session: false,
    passReqToCallback: true
  };
  passport.use(
    "signup",
    new LocalStrategy(
      Configs as IStrategyOptionsWithRequest,
      async (req, username, password, done) => {
        console.log(req.body);
        const response = await authService.signUp(req);
        done(undefined, response);
      }
    )
  );
  passport.use(
    "signin",
    new LocalStrategy(
      Configs as IStrategyOptionsWithRequest,
      async (req, username: any, password: any, done: any) => {
        const response = await authService.signIn(username, password);
        console.log(response);
        done(undefined, response);
      }
    )
  );
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret
  };

  passport.use(
    "jwt",
    new JwtStrategy(opts, async (jwt_payload, done) => {
      console.log(jwt_payload);
      try {
        const validUser = authService.validateUser(jwt_payload.email);
        return done(undefined, validUser ? jwt_payload : null);
      } catch (err) {
        return done(err);
      }
    })
  );
};
