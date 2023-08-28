'use client'

import type { CommonProduct } from '@/core/Inventory'
import { Table } from '@/theme/components'
import { Chip, User } from '@nextui-org/react'
import type { FC } from 'react'

export const InventoryTable: FC<Props> = ({ products }) => {
  return (
    <Table
      searchFn={(query, data) => {
        return data.filter(d => d.name.toLowerCase().includes(query))
      }}
      action={{
        text: 'Add Product',
        fn() {
          console.log('clicked')
        }
      }}
      rowsPerPageOptions={[3, 6, 9, 12]}
      filters
      data={products}
      getKey={d => d.id.toString()}
      columns={[
        {
          name: 'Product',
          field: 'name',
          render: data => (
            <User
              avatarProps={{
                radius: 'sm',
                src: data.assets.source
              }}
              name={data.name}
            />
          )
        },
        {
          name: 'Price',
          field: 'price',
          render: data => <span>{`$${data.variants[0].price}`}</span>
        },
        {
          name: 'Stock',
          field: 'variants.stock',
          render: data => <span>{data.variants[0].stock}</span>
        },
        {
          name: 'Variants',
          field: 'variants',
          render: data => <span>{data.variants.length}</span>
        },
        {
          name: 'Status',
          field: 'enabled',
          render: data => (
            <Chip className="capitalize" color="success" variant="flat">
              {data.enabled ? 'Enabled' : 'Disabled'}
            </Chip>
          )
        }
      ]}
    />
  )
}

type Props = {
  products: CommonProduct[]
}
