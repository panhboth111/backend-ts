// const loader = require('./loaders')
import express from "express";
import loaders from "./loaders";
import { PORT } from "./utilities/configs";

const startServer = async () => {
  const app = express();
  try {
    await loaders(app);
    app.listen(PORT, "0.0.0.0", () =>
      console.log(`Server running on port ${PORT}...`)
    );
  } catch (error) {
    console.error(error);
  }
};
startServer();
