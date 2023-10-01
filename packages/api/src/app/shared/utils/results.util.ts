import { ErrorCode } from '../errors'

export class ServiceResult<T> {
  constructor(readonly data: T, readonly message?: string, readonly errorCode?: ErrorCode) {}
}

export class RepositoryResult<T> {
  constructor(readonly data: T, readonly message?: string, readonly errorCode?: ErrorCode) {}
}
