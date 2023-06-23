/**
 * @file purchasedTokens.js
 * @summary Defines purchased tokens schema
 */

const mongoose = require("mongoose");

const token_status = {
  USED: "USED",
  NEW: "NEW",
  EXPIRED: "EXPIRED",
};

const purchasedTokensSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      length: 11,
      field: "id",
    },
    meter_number: {
      type: String,
      required: true,
      length: 6,
      field: "meter_number",
    },
    token: {
      type: String,
      required: true,
      length: 8,
      field: "token",
    },
    token_status: {
      type: String,
      enum: ["USED", "NEW", "EXPIRED"],
      required: true,
      field: "token_status",
    },
    token_value_days: {
      type: Number,
      required: true,
      field: "token_value_days",
    },
    purchased_date: {
      type: Date,
      required: true,
      default: Date.now,
      field: "purchased_date",
    },
    amount: {
      type: Number,
      required: true,
      field: "amount",
    },
  },
  { collection: "purchased_tokens" }
);

module.exports = {
  PurchasedTokens: mongoose.model("PurchasedTokens", purchasedTokensSchema),
  token_status,
};

/**
 * @swagger
 * definitions:
 *   PurchasedToken:
 *     type: object
 *     properties:
 *       id:
 *         type: number
 *         example: 12345678901
 *       meter_number:
 *         type: string
 *         example: "123456"
 *       token:
 *         type: string
 *         example: "ABCDEFGH"
 *       token_status:
 *         type: string
 *         enum: ["USED", "NEW", "EXPIRED"]
 *         example: "NEW"
 *       token_value_days:
 *         type: number
 *         example: 5
 *       purchased_date:
 *         type: string
 *         format: date-time
 *         example: "2023-06-23T12:34:56Z"
 *       amount:
 *         type: number
 *         example: 1000
 */
