'use client'
import type { ColumnDef } from '@tanstack/react-table'
import type { BasicProduct } from '@/core/inventory/types'
import { DataTable, Checkbox, DataTableColumnHeader, Badge } from '@/theme/components'
import type { FC } from 'react'
import Link from 'next/link'
import { PlusCircleIcon } from 'lucide-react'

export const InventoryTable: FC<Props> = ({ products }) => {
  const input: TableProduct[] = products.map(p => ({
    id: p.id,
    enabled: p.enabled,
    name: p.name,
    slug: p.slug,
    assets: p.assets,
    price: p.variants[0]?.price ?? 0,
    stock: p.variants[0]?.stock ?? 0
  }))

  return (
    <DataTable
      data={input}
      columns={columns}
      action={{
        text: 'Agregar producto',
        icon: <PlusCircleIcon size={16} />,
        href: '/inventory/create'
      }}
    />
  )
}

type TableProduct = Pick<BasicProduct, 'id' | 'name' | 'slug' | 'enabled' | 'assets'> & {
  price: number
  stock: number
}

const columns: ColumnDef<TableProduct>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={value => table.toggleAllPageRowsSelected(Boolean(value))}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(Boolean(value))}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Producto" />
    },
    cell: ({ row }) => (
      <Link href={`/inventory/${row.original.slug ?? ''}`}>
        <span>{row.original.name}</span>
      </Link>
    )
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Precio" />
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('price'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount)

      return <div className="font-medium">{formatted}</div>
    }
  },
  {
    accessorKey: 'stock',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Stock" />
    }
  },
  {
    accessorKey: 'Status',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />
    },
    cell: ({ row }) => {
      return (
        <Badge variant={row.original.enabled ? 'default' : 'secondary'}>
          {row.original.enabled ? 'Enabled' : 'Disabled'}
        </Badge>
      )
    }
  }
]

type Props = {
  products: BasicProduct[]
}
