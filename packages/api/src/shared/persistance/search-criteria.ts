import { PaginatedListInput } from '../types/graphql'

export type SearchCriteriaInMany = PaginatedListInput & {
  /**
   * Skip the first n results
   */
  skip: number
  /**
   * Take n result where the cursor is (skip end position)
   */
  take: number
}
