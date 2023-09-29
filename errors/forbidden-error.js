const HTTP_ERRORS = require('./errorCodes');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = HTTP_ERRORS.FORBIDDEN;
  }
}

module.exports = ForbiddenError;
