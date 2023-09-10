const HTTP_ERRORS = require('./errorCodes');

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = HTTP_ERRORS.ERROR_DATA;
  }
}

module.exports = ValidationError;
