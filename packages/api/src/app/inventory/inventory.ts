import { OptionValue as DBOption, Option as DBOptionGroup } from '@prisma/client'

export type OptionGroup = DBOptionGroup

export type Option = Omit<DBOption, 'optionGroupId'>
