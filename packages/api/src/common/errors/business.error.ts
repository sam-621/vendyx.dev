export class BusinessError extends Error {
  constructor(
    message: string,
    readonly code: ErrorCode,
    readonly metadata?: Record<string, unknown>
  ) {
    super(message)
    this.name = code
    this.metadata = metadata
  }
}

export enum ErrorCode {
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR ',
  USER_INPUT_ERROR = 'USER_INPUT_ERROR',
  THIRD_PARTY_ERROR = 'THIRD_PARTY_ERROR'
}

export type ErrorMetadata = Record<string, unknown>
