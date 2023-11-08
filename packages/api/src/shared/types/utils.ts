export type MakeAny<T> = {
  [P in keyof T]: any
}

export type MakeOptional<T> = {
  [P in keyof T]?: T[P] | undefined | null
}
