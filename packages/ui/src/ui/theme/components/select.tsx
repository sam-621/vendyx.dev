'use client'

import { Select as NextUiSelect, SelectItem, type SelectProps } from '@nextui-org/select'
import type { FC } from 'react'

export const Select: FC<Props> = ({ options, ...rest }) => {
  return (
    <NextUiSelect labelPlacement="outside" placeholder="-" radius="sm" {...rest}>
      {options.map(opt => (
        <SelectItem key={opt.value} value={opt.value}>
          {opt.label}
        </SelectItem>
      ))}
    </NextUiSelect>
  )
}

type Props = Omit<SelectProps, 'children'> & {
  options: {
    value: string
    label: string
  }[]
}
