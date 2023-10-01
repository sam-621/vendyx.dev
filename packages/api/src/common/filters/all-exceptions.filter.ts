import { BusinessError, ErrorCode } from '@/app/shared/errors'
import { LoggerService } from '@/app/shared/logger'
import { Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(readonly logger: LoggerService) {}

  catch(exception: Error): void {
    // Errors throw by our domain
    if (exception instanceof BusinessError) {
      const {
        extensions: { code },
        message
      } = exception

      this.logger.businessLog(exception, code as ErrorCode, [message])

      return
    }

    // Errors throw by the framework
    if (exception instanceof HttpException) {
      const errorMessage = (exception.getResponse() as HttpGenericError).message
      const errorCode = (exception.getResponse() as HttpGenericError).error

      const formattedErrorMessage = Array.isArray(errorMessage) ? errorMessage : [errorMessage]
      const formattedErrorCode = errorCode.toUpperCase().replace(' ', '_') as ErrorCode

      this.logger.businessLog(exception, formattedErrorCode, formattedErrorMessage)

      return
    }

    // Unexpected errors
    const errorMessage = exception.message
    const errorCode = exception.name.toUpperCase().replace(' ', '_') as ErrorCode
    const formattedErrorMessage = Array.isArray(errorMessage) ? errorMessage : [errorMessage]

    this.logger.businessLog(exception, errorCode, formattedErrorMessage)
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
