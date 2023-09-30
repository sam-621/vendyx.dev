import { GraphQLError } from 'graphql'

export class BusinessError extends GraphQLError {
  constructor(message: string, code: ErrorCode) {
    super(message, {
      extensions: {
        code: code
      }
    })
  }
}

export enum ErrorCode {
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR ',
  USER_INPUT_ERROR = 'USER_INPUT_ERROR'
}
