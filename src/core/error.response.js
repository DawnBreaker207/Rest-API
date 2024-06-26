import reasonPhrases from './reasonPhrases.js';
import StatusCode from './statusCode.js';

// const StatusCode = {
//   FORBIDDEN: 403,
//   CONFLICT: 409,
// };
// const ReasonStatusCode = {
//   FORBIDDEN: 'Bad request error',
//   CONFLICT: 'Conflict error',
// };
class ErrorResponse extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

class ConflictRequestError extends ErrorResponse {
  constructor(
    message = reasonPhrases.CONFLICT,
    statusCode = StatusCode.FORBIDDEN
  ) {
    super(message, statusCode);
  }
}
class BadRequestError extends ErrorResponse {
  constructor(
    message = reasonPhrases.CONFLICT,
    statusCode 
    // = StatusCode.FORBIDDEN
  ) {
    super(message, statusCode);
  }
}

export { ConflictRequestError, BadRequestError };
