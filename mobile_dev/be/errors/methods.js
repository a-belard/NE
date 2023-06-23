/**
 * @file methods.js
 * @summary Contains utility methods for throwing errors
 * */
const { AppError } = require("./appError");
const { constants } = require(__basedir + "/config");
const { ERROR, LOG_LEVELS } = constants;

/**
 * Method for throwing "bad request" error
 * @param {string} message Error message
 * @param {boolean} [isOperational] Determines whether our app throws error intentionally or its unhandled rejection. Default true
 * */
const throwBadRequestError = (message, isOperational = true) => {
  throw new AppError(
    LOG_LEVELS.ERROR,
    ERROR.BAD_REQUEST.TYPE,
    message,
    ERROR.BAD_REQUEST.CODE,
    isOperational
  );
};

/**
 * Method for throwing "not found" error
 * @param {string} message Error message
 * @param {boolean} [isOperational] Determines whether our app throws error intentionally or its unhandled rejection. Default true
 * */
const throwNotFoundError = (message, isOperational = true) => {
  throw new AppError(
    LOG_LEVELS.ERROR,
    ERROR.NOT_FOUND.TYPE,
    message,
    ERROR.NOT_FOUND.CODE,
    isOperational
  );
};

/**
 * Method for throwing "internal error" error
 * @param {string} message Error message
 * @param {boolean} [isOperational] Determines whether our app throws error intentionally or its unhandled rejection. Default true
 * */
const throwInternalServerError = (message, isOperational = true) => {
  throw new AppError(
    LOG_LEVELS.ERROR,
    ERROR.INTERNAL_SERVER_ERROR.TYPE,
    message,
    ERROR.INTERNAL_SERVER_ERROR.CODE,
    isOperational
  );
};

module.exports = {
  throwBadRequestError,
  throwInternalServerError,
  throwNotFoundError,
};
