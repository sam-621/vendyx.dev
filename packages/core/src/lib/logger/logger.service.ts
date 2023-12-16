import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';
import { ErrorCode } from '@vendyx/common';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
  businessError(
    error: Error,
    errorCode: ErrorCode,
    message: string,
    metadata?: Record<string, unknown>,
    stack?: boolean
  ) {
    this.log({
      error: `${error.name}: ${error.message}`,
      errorCode,
      message,
      metadata,
      trace: stack ? error.stack : undefined
    });
  }
}
