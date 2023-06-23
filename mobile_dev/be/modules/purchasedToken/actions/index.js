/**
 * @file actions.js
 * @summary Purchased tokens actions
 * @description This file contains the actions for the purchased tokens entity.
 */

const {
  generateToken,
  validateToken,
  getTokensByMeterNumber,
} = require("../../../db/controllers/purchasedTokens");

/**
 * Action to generate a token
 * @param {number} amount Amount of money
 * @param {string} meterNumber Meter number
 * @returns {Promise<string>} Generated token
 */
const generateTokenAction = async (amount, meterNumber) => {
  const token = await generateToken(amount, meterNumber);
  return token.toString();
};

/**
 * Action to validate a token and retrieve the number of lighting days
 * @param {string} token Token to validate
 * @returns {Promise<number>} Number of lighting days
 */
const validateTokenAction = async (token) => {
  // Find the token in the database
  const numberOfDays = await validateToken(token);

  return numberOfDays;
};

/**
 * Action to get all tokens by meter number
 * @param {string} meterNumber Meter number
 * @returns {Promise<Array>} Array of tokens
 */
const getTokensByMeterNumberAction = async (meterNumber) => {
  // Find all tokens for the given meter number
  const tokens = await getTokensByMeterNumber(meterNumber);

  return tokens;
};

module.exports = {
  generateTokenAction,
  validateTokenAction,
  getTokensByMeterNumberAction,
};
