import { BusinessError, ErrorCode, ErrorMetadata } from './business.error'

export class InternalServerError extends BusinessError {
  constructor(message: string, metadata?: ErrorMetadata) {
    super(message, ErrorCode.INTERNAL_SERVER_ERROR, metadata)
  }
}

export class UserInputError extends BusinessError {
  constructor(message: string, metadata?: ErrorMetadata) {
    super(message, ErrorCode.USER_INPUT_ERROR, metadata)
  }
}
