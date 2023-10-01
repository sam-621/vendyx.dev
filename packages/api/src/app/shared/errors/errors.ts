import { BusinessError, ErrorCode } from './business.error'

export class InternalServerError extends BusinessError {
  constructor(message: string) {
    super(message, ErrorCode.INTERNAL_SERVER_ERROR)
  }
}

export class UserInputError extends BusinessError {
  constructor(message: string) {
    super(message, ErrorCode.USER_INPUT_ERROR)
  }
}

export class RepositoryError extends BusinessError {
  constructor(message: string) {
    super(message, ErrorCode.INTERNAL_SERVER_ERROR)
  }
}
