import { type ErrorCode } from '@vendyx/common';

export class ApiError extends Error {
  constructor(
    readonly message: string,
    readonly code: ErrorCode
  ) {
    super(message);
  }
}
