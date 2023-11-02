import { BusinessError, ErrorCode } from '@/shared/errors'

import { Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'
import { GraphQLError } from 'graphql'
import { LoggerService } from '../logger'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(readonly logger: LoggerService) {}

  catch(exception: Error): void {
    console.log({ exception })

    // Errors throw by our domain
    if (exception instanceof BusinessError) {
      const { code, message, metadata } = exception

      this.logger.businessLog(exception, code as ErrorCode, message, metadata)

      throw new GraphQLError(message, { extensions: { code } })
    }

    // Errors throw by the framework
    if (exception instanceof HttpException) {
      const errorMessage = (exception.getResponse() as HttpGenericError).message
      const errorCode = (exception.getResponse() as HttpGenericError).error

      const formattedErrorCode = errorCode.toUpperCase().replace(' ', '_') as ErrorCode

      this.logger.businessLog(exception, formattedErrorCode, errorMessage)

      // for some reason sometimes the graphql playground does not find the favicon.ico and throws an error
      // if (errorMessage == 'Cannot GET /favicon.ico') return

      // throw new GraphQLError(errorMessage, { extensions: { code: formattedErrorCode } })
    }

    // Unexpected errors
    const errorMessage = exception.message
    const errorCode = exception.name.toUpperCase().replace(' ', '_') as ErrorCode

    this.logger.businessLog(exception, errorCode, errorMessage)
    throw new GraphQLError(errorMessage, { extensions: { code: errorCode } })
  }
}

export type HttpGenericError = {
  message: string
  statusCode: HttpStatus
  /**
   * Error name based on status code
   *
   * @example
   * "Not Found"
   */
  error: string
}
