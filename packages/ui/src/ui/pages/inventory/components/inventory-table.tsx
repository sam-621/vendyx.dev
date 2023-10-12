'use client'

import type { GetInventoryProductsQueryResult } from '@/core/inventory/types'
import { Table } from '@/theme/components'
import { Chip, User } from '@nextui-org/react'
import Link from 'next/link'
import type { FC } from 'react'
import { EmptyStateInventoryTable } from './empty-state-inventory-table'

export const InventoryTable: FC<Props> = ({ products }) => {
  return (
    <Table
      searchFn={(query, data) => {
        return data.filter(d => d?.name.toLowerCase().includes(query))
      }}
      action={
        products.items.length > 0
          ? {
              text: 'Agregar producto',
              fn() {
                console.log('clicked')
              }
            }
          : undefined
      }
      rowsPerPageOptions={[3, 6, 9, 12]}
      filters
      data={products.items}
      getKey={d => d?.id.toString() ?? ''}
      emptyState={<EmptyStateInventoryTable />}
      columns={[
        {
          name: 'Product',
          field: 'name',
          render: data => {
            return (
              <Link href={`/inventory/${data?.slug ?? ''}`}>
                <User
                  avatarProps={{
                    radius: 'sm',
                    src: data?.assets[0]?.source
                  }}
                  name={data?.name}
                />
              </Link>
            )
          }
        },
        {
          name: 'Price',
          field: 'price',
          render: data => <span>{`$ ${data?.variants[0]?.price ?? 0}`}</span>
        },
        {
          name: 'Stock',
          field: 'variants.stock',
          render: data => <span>{data?.variants[0]?.stock}</span>
        },
        {
          name: 'Variants',
          field: 'variants',
          render: data => <span>{data?.variants.length}</span>
        },
        {
          name: 'Status',
          field: 'enabled',
          render: data => (
            <Chip
              className="capitalize"
              color={data?.enabled ?? false ? 'success' : 'default'}
              variant="flat"
            >
              {data?.enabled ?? false ? 'Enabled' : 'Disabled'}
            </Chip>
          )
        }
      ]}
    />
  )
}

type Props = {
  products: GetInventoryProductsQueryResult
}
