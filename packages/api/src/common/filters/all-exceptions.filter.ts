import { BusinessError, ErrorCode } from '@/common/errors'
import { LoggerService } from '@/app/shared/logger'
import { Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'
import { GraphQLError } from 'graphql'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(readonly logger: LoggerService) {}

  catch(exception: Error): void {
    // Errors throw by our domain
    if (exception instanceof BusinessError) {
      const { code, message } = exception

      this.logger.businessLog(exception, code as ErrorCode, message)
      throw new GraphQLError(message, { extensions: { code } })
    }

    // Errors throw by the framework
    if (exception instanceof HttpException) {
      const errorMessage = (exception.getResponse() as HttpGenericError).message
      const errorCode = (exception.getResponse() as HttpGenericError).error

      const formattedErrorCode = errorCode.toUpperCase().replace(' ', '_') as ErrorCode

      this.logger.businessLog(exception, formattedErrorCode, errorMessage)
      throw new GraphQLError(errorMessage, { extensions: { code: formattedErrorCode } })
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
