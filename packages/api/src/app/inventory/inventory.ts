import {
  Product as DBProduct,
  Option as DBOption,
  OptionGroup as DBOptionGroup,
  ProductVariant as DBProductVariant
} from '@prisma/client'

export type Product = DBProduct

export type ProductVariant = Omit<DBProductVariant, 'productId'>

export type OptionGroup = DBOptionGroup

export type Option = Omit<DBOption, 'optionGroupId'>
