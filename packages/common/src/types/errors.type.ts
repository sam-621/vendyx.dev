export type ErrorResult = {
  code: ErrorCode;
  message: string;
};

export enum ErrorCode {
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  UNAUTHORIZED = 'UNAUTHORIZED',
  USER_INPUT = 'USER_INPUT'
}
