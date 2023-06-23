/**
 * @file index.js
 * @summary Initiate and expose routes
 * */
const PurchasedToken = require("./purchasedToken");

const initiateRoutes = (router) => {
  // all modules with routes will be added here
  PurchasedToken(router);
};

module.exports = initiateRoutes;
