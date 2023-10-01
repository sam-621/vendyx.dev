export class BusinessError extends Error {
  constructor(message: string, readonly code: ErrorCode) {
    super(message)
    this.name = code
  }
}

export enum ErrorCode {
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR ',
  USER_INPUT_ERROR = 'USER_INPUT_ERROR'
}
