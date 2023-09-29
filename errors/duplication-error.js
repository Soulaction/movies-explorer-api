const HTTP_ERRORS = require('./errorCodes');

class DuplicationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = HTTP_ERRORS.DUBLICATION;
  }
}

module.exports = DuplicationError;
