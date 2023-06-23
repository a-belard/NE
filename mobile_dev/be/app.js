/**
 * @file app.js
 * @summary Create and expose express app instance
 * @description This file is responsible for creating instance of express and initializing swagger. All application specific
 * middleware will be used here.
 * The app instance along with the express router are exposed to be used by HTTP server.
 * */
const express = require("express");
const cors = require("cors");
const { json, urlencoded } = require("body-parser");
const router = express.Router();
const initiateSwagger = require("./swagger");
const initiateRoutes = require("./modules");
const { accessLogger } = require("./middlewares");
const { constants } = require("./config");

const { ENABLE_ACCESS_LOGS } = constants;

const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);

app.use(
  json({
    extended: true,
  })
);

app.use(cors());

initiateSwagger(router);
initiateRoutes(router);

if (ENABLE_ACCESS_LOGS) {
  router.use(accessLogger);
}

app.use("/api/v1", router);

module.exports = {
  app,
  router,
};
