import { ErrorCode, ErrorMetadata } from '@/shared/errors'
import { ConsoleLogger, Injectable, Scope } from '@nestjs/common'

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
  businessLog(
    error: Error,
    errorCode: ErrorCode,
    message: string,
    metadata?: ErrorMetadata,
    stack?: boolean
  ) {
    this.log({
      error: `${error.name}: ${error.message}`,
      errorCode,
      message,
      metadata,
      trace: stack ? error.stack : undefined
    })
  }
}
