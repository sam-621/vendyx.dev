'use client';

import { type ColumnDef } from '@tanstack/react-table';
import Link from 'next/link';

import { Badge, Checkbox, DataTableColumnHeader } from '@/ui/theme/components';

import { InventoryTableActions } from './actions';
import { type TableProduct } from './inventory-table';

export const InventoryTableColumns: ColumnDef<TableProduct>[] = [
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
        href={`/admin/inventory/${row.original.slug ?? ''}`}
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
