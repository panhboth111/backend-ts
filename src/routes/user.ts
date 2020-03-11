import { Router } from "express";

export default (router: Router) => {
  router.get("/users", (req, res) => {
    console.log("here");
    res.send("hiiii");
  });
};
