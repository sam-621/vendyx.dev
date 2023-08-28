'use client'

import { Select as NextUiSelect, SelectItem } from '@nextui-org/select'

export const Select = () => {
  return (
    <NextUiSelect
      defaultSelectedKeys={['Enabled']}
      labelPlacement="outside"
      placeholder="Select an state"
      radius="sm"
      label="State"
      className="max-w-xs"
    >
      <SelectItem key="Enabled" value={'Enabled'}>
        Enabled
      </SelectItem>
      <SelectItem key="Disabled" value={'Disabled'}>
        Disabled
      </SelectItem>
    </NextUiSelect>
  )
}
