import StatusCode from './statusCode.js';
import reasonPhrases from './reasonPhrases.js';
// const StatusCode = {
//   OK: 200,
//   CREATE: 201,
// };
class SuccessResponse {
  constructor({
    message,
    statusCode = StatusCode.OK,
    reasonStatusCode = reasonPhrases.OK,
    metadata = {},
  }) {
    this.message = !message ? reasonStatusCode : message;
    this.status = statusCode;
    this.metadata = metadata;
  }
  send(res, headers = {}) {
    return res.status(this.status).json(this);
  }
}
class OK extends SuccessResponse {
  constructor({ message, metadata }) {
    super({ message, metadata });
  }
}
class CREATE extends SuccessResponse {
  constructor({
    options = {},
    message,
    statusCode = StatusCode.CREATE,
    reasonStatusCode = reasonPhrases.CREATED,
    metadata,
  }) {
    super({ message, statusCode, reasonStatusCode, metadata });
    this.options = options;
  }
}

export { OK, CREATE };
