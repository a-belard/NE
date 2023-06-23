/**
 * @file controller.js
 * @summary Purchased tokens controllers
 * @description This file contains controller definitions for purchased tokens entity.
 * Each method is responsible for extracting data, passing it to the corresponding action, and
 * sending the response back to the client.
 */

const {
  generateTokenAction,
  validateTokenAction,
  getTokensByMeterNumberAction,
} = require("./actions");
const { constants } = require(__basedir + "/config");
const { SUCCESS } = constants;

/**
 * Controller to generate a token based on the provided amount and meter number.
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @param {function} next Next method
 */
const generateTokenController = async (req, res, next) => {
  try {
    const { amount, meterNumber } = req.body;
    const token = await generateTokenAction(amount, meterNumber);
    res.status(SUCCESS.CODE).send({ token });
    next();
  } catch (error) {
    console.log(error);
    res.status(error.code).send({
      error: error.message,
    });
    next();
  }
};

/**
 * Controller to validate a token and retrieve the number of lighting days.
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @param {function} next Next method
 */
const validateTokenController = async (req, res, next) => {
  try {
    const { token } = req.body;
    const numberOfDays = await validateTokenAction(token);
    res.status(SUCCESS.CODE).send({ numberOfDays });
    next();
  } catch (error) {
    console.log(error);
    res.status(error.code).send({
      error: error.message,
    });
    next();
  }
};

/**
 * Controller to get all tokens generated for a specific meter number.
 * @param {object} req HTTP request object
 * @param {object} res HTTP response object
 * @param {function} next Next method
 */
const getTokensByMeterNumberController = async (req, res, next) => {
  try {
    const { meterNumber } = req.query;
    const tokens = await getTokensByMeterNumberAction(meterNumber);
    res.status(SUCCESS.CODE).send({ tokens });
    next();
  } catch (error) {
    res.status(error.code).send({
      error: error.message,
    });
    next();
  }
};

module.exports = {
  getTokensByMeterNumberController,
  validateTokenController,
  generateTokenController,
};
