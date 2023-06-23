/**
 * @file index.js
 * @summary Purchased tokens routes
 * @description This file contains routes for the purchased tokens entity
 */

const {
  generateTokenController,
  validateTokenController,
  getTokensByMeterNumberController,
} = require("./controller");

module.exports = (router) => {
  /**
   * @swagger
   * /purchased-tokens/generate:
   *   post:
   *     tags:
   *       - purchased tokens
   *     summary: Generate a token
   *     description: Generates a token based on the provided amount and meter number
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: body
   *         name: Token details
   *         description: Amount and meter number
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             amount:
   *               type: number
   *             meterNumber:
   *               type: string
   *               minLength: 6
   *               maxLength: 6
   *     responses:
   *       200:
   *         description: Token generated successfully
   *         schema:
   *           type: object
   *           properties:
   *             token:
   *               type: string
   *       400:
   *         description: Bad Request
   *       500:
   *         description: Internal Error
   */
  router.post("/purchased-tokens/generate", generateTokenController);

  /**
   * @swagger
   * /purchased-tokens/validate:
   *   post:
   *     tags:
   *       - purchased tokens
   *     summary: Validate a token
   *     description: Validates a token and retrieves the number of lighting days
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: body
   *         name: Token details
   *         description: Token to validate
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             token:
   *               type: string
   *     responses:
   *       200:
   *         description: Token validated successfully
   *         schema:
   *           type: object
   *           properties:
   *             numberOfDays:
   *               type: number
   *       400:
   *         description: Bad Request
   *       500:
   *         description: Internal Error
   */
  router.post("/purchased-tokens/validate", validateTokenController);

  /**
   * @swagger
   * /purchased-tokens:
   *   get:
   *     tags:
   *       - purchased tokens
   *     summary: Get all tokens by meter number
   *     description: Retrieves all tokens generated for a specific meter number
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: query
   *         name: meterNumber
   *         description: Meter number
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Tokens retrieved successfully
   *         schema:
   *           type: object
   *           properties:
   *             tokens:
   *               type: array
   *               items:
   *                 $ref: '#/definitions/PurchasedToken'
   *       400:
   *         description: Bad Request
   *       500:
   *         description: Internal Error
   */
  router.get("/purchased-tokens", getTokensByMeterNumberController);
};
