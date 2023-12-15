import { ErrorCode } from '@vendyx/common';
import { GraphQLError } from 'graphql';

abstract class BaseError extends GraphQLError {
  constructor(readonly code: ErrorCode, readonly message: string) {
    super(message, { extensions: { code } });
  }
}

/**
 * @description
 * This error is thrown when an unexpected error occurs.
 */
export class InternalServerError extends BaseError {
  constructor(message: string) {
    super(ErrorCode.INTERNAL_SERVER_ERROR, message);
  }
}

/**
 * @description
 * This error is thrown when a user is not authorized to perform an action.
 */
export class UnauthorizedError extends BaseError {
  constructor(message: string) {
    super(ErrorCode.UNAUTHORIZED, message);
  }
}

/**
 * @description
 * This error is thrown when a user input is invalid.
 */
export class UserInputError extends BaseError {
  constructor(message: string) {
    super(ErrorCode.USER_INPUT, message);
  }
}

/**
 * @description
 * This error is thrown when a validation error occurs.
 */
export class ValidationError extends BaseError {
  constructor(message: string) {
    super(ErrorCode.VALIDATION, message);
  }
}
