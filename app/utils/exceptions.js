export class BadRequestException extends Error {
  constructor(message) {
    super(message);
    this.name = "BAD_REQUEST";
    this.message = message;
  }
}

export class NotFoundException extends Error {
  constructor(message) {
    super(message);
    this.name = "NOT_FOUND";
    this.message = message;
  }
}
