import { DataTable } from '@vendyx/theme';

import { type BasicProduct } from '@/lib/vendyx/types';
import { useProducts } from '@/services/inventory';

import { InventoryTableColumns } from './inventory-table-columns';

export const InventoryTable = async () => {
  const { products } = useProducts();

  if (!products) return null;

  const input: TableProduct[] = products.items.map(p => ({
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
      columns={InventoryTableColumns}
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
