const HTTP_ERRORS = require('./errorCodes');

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = HTTP_ERRORS.NOT_AUTH;
  }
}

module.exports = AuthError;
