'use client';
import type { ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';
import type { FC } from 'react';

import type { BasicProduct } from '@/core/inventory/types';
import { Badge, Checkbox, DataTable, DataTableColumnHeader } from '@/theme/components';

import { InventoryTableActions } from './inventory-table-actions';

export const InventoryTable: FC<Props> = ({ products }) => {
  const input: TableProduct[] = products.map(p => ({
    id: p.id,
    enabled: p.enabled,
    name: p.name,
    slug: p.slug,
    assets: p.assets,
    sku: p.variants.items[0]?.sku ?? '',
    price: p.variants.items[0]?.price ?? 0,
    stock: p.variants.items[0]?.stock ?? 0
  }));

  return (
    <DataTable
      data={input}
      columns={columns}
      search={{
        placeholder: 'Search products...',
        filterKey: 'name'
      }}
    />
  );
};

export type TableProduct = Pick<BasicProduct, 'id' | 'name' | 'slug' | 'enabled' | 'assets'> & {
  price: number;
  stock: number;
  sku: string;
};

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
    accessorKey: 'sku',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="SKU" />;
    },
    cell: ({ row }) => {
      return <span className="w-20">{row.original.sku}</span>;
    },
    enableSorting: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Product" />;
    },
    cell: ({ row }) => (
      <Link
        href={`/inventory/${row.original.slug ?? ''}`}
        className="flex items-center gap-2 w-full"
      >
        {row.original.assets.items.length > 0 && (
          <img
            src={row.original.assets.items[0]?.source ?? ''}
            alt={row.getValue('name')}
            className="h-12 w-12 object-cover rounded-md"
          />
        )}
        <span>{row.original.name}</span>
      </Link>
    )
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Price" />;
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('price'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    }
  },
  {
    accessorKey: 'stock',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Stock" />;
    }
  },
  {
    accessorKey: 'Status',
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />;
    },
    cell: ({ row }) => {
      return (
        <Badge variant={row.original.enabled ? 'default' : 'secondary'}>
          {row.original.enabled ? 'Enabled' : 'Disabled'}
        </Badge>
      );
    },
    enableSorting: false
  },
  {
    id: 'actions',
    header: () => <div></div>,
    cell: ({ row }) => <InventoryTableActions row={row} />
  }
];

type Props = {
  products: BasicProduct[];
};
