'use client'

import { Table } from '@/theme/components/table'
import { Chip, User } from '@nextui-org/react'

export default function InventoryPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-foreground font-semibold text-4xl">Inventory</h1>
      <section>
        <Table
          // searchFn={(query, data) => {
          //   return data.filter(d => d.product.toLowerCase().includes(query))
          // }}
          // action={{
          //   text: 'Add Product',
          //   fn() {
          //     console.log('clicked')
          //   }
          // }}
          // rowsPerPageOptions={[3, 6, 9, 12]}
          // views={[
          //   { name: 'All', key: 'all' },
          //   { name: 'Enabled', key: 'enabled' }
          // ]}
          data={{ all: DATA, enabled: DATA2 }}
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
    product: 'Blue label',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  },
  {
    id: 3,
    img: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small',
    product: 'Chair',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  },
  {
    id: 4,
    img: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small',
    product: 'Vendure',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  },
  {
    id: 5,
    img: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small',
    product: 'Vendyx',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  },
  {
    id: 6,
    img: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small',
    product: 'Leaving room',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  },
  {
    id: 7,
    img: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small',
    product: 'Stupid pice of dogsheet',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  },
  {
    id: 8,
    img: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small',
    product: 'idk',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  },
  {
    id: 9,
    img: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small',
    product: 'help',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  },
  {
    id: 10,
    img: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small',
    product: 'create',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  }
]

const DATA2 = [
  {
    id: 1,
    img: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small',
    product: 'Grey Feo',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  },
  {
    id: 2,
    img: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small',
    product: 'Grey Feo',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  },
  {
    id: 3,
    img: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small',
    product: 'Grey Feo',
    price: 188,
    stock: 22,
    variants: 2,
    status: 'enabled'
  }
]
