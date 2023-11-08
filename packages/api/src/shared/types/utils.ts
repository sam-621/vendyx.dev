export type MakeAny<T> = {
  [P in keyof T]: any
}
