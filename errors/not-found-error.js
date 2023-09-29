const HTTP_ERRORS = require('./errorCodes');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = HTTP_ERRORS.NOT_FOUND;
  }
}

module.exports = NotFoundError;
