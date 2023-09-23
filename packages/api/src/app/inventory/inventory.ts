import {
  LabelValues as ApiLabelValues,
  Option as ApiOption,
  Product as ApiProduct,
  ProductVariant as ApiProductVariant,
  OptionValues as ApiOptionValues
} from '@/common/types/graphql'

export type Product = Omit<
  ApiProduct,
  'variants' | 'collections' | 'assets' | 'labelValues' | 'options'
>

export type LabelValues = Omit<ApiLabelValues, 'label'>

export type Option = Omit<ApiOption, 'values'>

export type OptionValue = Omit<ApiOptionValues, 'option'>

export type ProductVariant = Omit<ApiProductVariant, 'optionValues' | 'asset' | 'product'>
