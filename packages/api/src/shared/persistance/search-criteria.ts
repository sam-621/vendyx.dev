import { PaginatedListInput } from '../types/graphql'

export type SearchCriteria = PaginatedListInput & {
  /**
   * Skip the first n results
   */
  skip: number
  /**
   * take the first n results
   */
  first: number
  /**
   * take the last n results
   */
  last: number
}
