/**
 * @file purchasedTokens.js
 * @summary Defines and exposes methods for purchased tokens entity
 */

const { PurchasedTokens, token_status } = require("../models");

// Generate 11 digit random ID
const generateRandomId = () => {
  const idLength = 11;
  let id = "";
  for (let i = 0; i < idLength; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
};

/**
 * Method to generate a token based on the provided amount of money.
 * @param {number} amount Amount of money in RWF.
 * @param {string} meterNumber Meter number.
 * @returns {Promise<string>} Generated token.
 */
const generateToken = async (amount, meterNumber) => {
  // Validate the amount and meter number
  if (amount < 100) {
    throw { code: 400, message: "Amount must be at least 100 RWF." };
  }
  if (meterNumber.length !== 6) {
    throw { code: 400, message: "Meter number must be 6 digits long." };
  }

  // amount should be multiple of 100
  if (amount % 100 !== 0) {
    throw { code: 400, message: "Amount must be a multiple of 100 RWF." };
  }

  // Calculate the number of days based on the amount
  const numberOfDays = Math.floor(amount / 100);
  if (numberOfDays > 1825) {
    throw {
      code: 400,
      message: "Token duration should not exceed 5 years (1825 days).",
    };
  }

  // Generate an eight-digit token
  const token = Math.floor(10000000 + Math.random() * 90000000).toString();

  // Generate 11 digit random id
  const id = generateRandomId();

  // Create a new purchased token record in the database
  const purchasedToken = new PurchasedTokens({
    id: id,
    meter_number: meterNumber,
    token,
    token_status: token_status.NEW,
    token_value_days: numberOfDays,
    amount,
  });
  await purchasedToken.save();

  return token;
};

/**
 * Method to validate a token and get the number of lighting days.
 * @param {string} token Token to validate.
 * @returns {Promise<number>} Number of lighting days.
 */
const validateToken = async (token) => {
  const purchasedToken = await PurchasedTokens.findOne({
    token,
    token_status: token_status.NEW,
  });
  if (!purchasedToken) {
    throw { code: 400, message: "Invalid token." };
  }

  // update it to USED
  await PurchasedTokens.findByIdAndUpdate(purchasedToken._id, {
    token_status: token_status.USED,
  });

  return purchasedToken.token_value_days;
};

/**
 * Method to retrieve all tokens generated for a specific meter number.
 * @param {string} meterNumber Meter number.
 * @returns {Promise<Array>} Array of tokens.
 */
const getTokensByMeterNumber = async (meterNumber) => {
  const tokens = await PurchasedTokens.find({ meter_number: meterNumber });
  return tokens;
};

module.exports = {
  generateToken,
  validateToken,
  getTokensByMeterNumber,
};
