import { ErrorCode, ErrorMetadata, ErrorResult } from '@vendyx/common';

export abstract class BusinessError extends Error implements ErrorResult {
  constructor(
    readonly code: ErrorCode,
    readonly message: string,
    readonly metadata?: ErrorMetadata
  ) {
    super(message);
    this.name = this.code;
  }
}

/**
 * @description
 * This error is thrown when an unexpected error occurs.
 */
export class InternalServerError extends BusinessError {
  constructor(message: string, metadata?: ErrorMetadata) {
    super(ErrorCode.INTERNAL_SERVER_ERROR, message, metadata);
  }
}

/**
 * @description
 * This error is thrown when a user is not authorized to perform an action.
 */
export class UnauthorizedError extends BusinessError {
  constructor(message: string, metadata?: ErrorMetadata) {
    super(ErrorCode.UNAUTHORIZED, message, metadata);
  }
}

/**
 * @description
 * This error is thrown when a user input is invalid.
 */
export class UserInputError extends BusinessError {
  constructor(message: string, metadata?: ErrorMetadata) {
    super(ErrorCode.USER_INPUT, message, metadata);
  }
}

/**
 * @description
 * This error is thrown when a validation error occurs.
 */
export class ValidationError extends BusinessError {
  constructor(message: string, metadata?: ErrorMetadata) {
    super(ErrorCode.VALIDATION, message, metadata);
  }
}
