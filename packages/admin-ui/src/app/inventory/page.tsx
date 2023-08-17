'use client'

import { InventoryTable } from '@/components/inventory'
import { Table } from '@/theme/components/table'
import { Chip, User } from '@nextui-org/react'

export default function InventoryPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-foreground font-semibold text-4xl">Inventory</h1>
      <section>
        <InventoryTable />
        <Table
          data={DATA}
          getKey={d => d.id.toString()}
          columns={[
            {
              name: 'Product',
              field: 'product',
              render: data => (
                <User
                  avatarProps={{
                    radius: 'sm',
                    src: data.img
                  }}
                  name={data.product}
                />
              )
            },
            { name: 'Price', field: 'price', render: data => <span>{`$${data.price}`}</span> },
            { name: 'Stock', field: 'stock' },
            { name: 'Variants', field: 'variants' },
            {
              name: 'Status',
              field: 'status',
              render: data => (
                <Chip className="capitalize" color="success" variant="flat">
                  {data.status}
                </Chip>
              )
            }
          ]}
        />
      </section>
    </div>
  )
}

const DATA = [
  {
    id: 1,
    img: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small',
    product: 'Grey fabric sofa',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  },
  {
    id: 2,
    img: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small',
    product: 'Grey fabric sofa',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  },
  {
    id: 3,
    img: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small',
    product: 'Grey fabric sofa',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  }
]
