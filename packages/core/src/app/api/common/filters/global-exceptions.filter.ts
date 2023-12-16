import { Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCode } from '@vendyx/common';
import { GraphQLError } from 'graphql';

import { BusinessError } from '@/lib/errors';
import { LoggerService } from '@/lib/logger';

@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {
  constructor(readonly logger: LoggerService) {}

  catch(exception: Error): void {
    console.log({ exception });

    // Errors throw by our domain
    if (exception instanceof BusinessError) {
      const { code, message, metadata } = exception;

      this.logger.businessError(exception, code as ErrorCode, message, { metadata });

      throw new GraphQLError(message, { extensions: { code } });
    }

    // Errors throw by the framework
    if (exception instanceof HttpException) {
      const errorMessage = (exception.getResponse() as HttpGenericError).message;
      const errorCode = (exception.getResponse() as HttpGenericError).statusCode;

      this.logger.businessError(exception, errorCode as unknown as ErrorCode, errorMessage, {
        exception
      });

      // for some reason sometimes the graphql playground does not find the favicon.ico and throws an error
      if (errorMessage == 'Cannot GET /favicon.ico') return;

      throw new GraphQLError(errorMessage, {
        extensions: { code: errorCode as unknown as ErrorCode }
      });
    }

    // Unexpected errors
    const errorMessage = exception.message;
    const errorCode = exception.name.toUpperCase().replace(' ', '_') as ErrorCode;

    this.logger.businessError(exception, errorCode, errorMessage, { exception });

    throw new GraphQLError(errorMessage, { extensions: { code: errorCode } });
  }
}

export type HttpGenericError = {
  message: string;
  statusCode: HttpStatus;
  /**
   * Error name based on status code
   *
   * @example
   * "Not Found"
   */
  error: string;
};
