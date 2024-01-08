import { Link } from 'react-router-dom';

import { ButtonLink } from '@vendyx/theme';

import { AdminPageLayout } from '@/components/layouts';

import { InventoryTable } from './table/inventory-table';

export const InventoryPage = () => {
  return (
    <AdminPageLayout
      title="Inventory"
      breadcrumbs={[{ label: 'Inventory' }]}
      actions={
        <ButtonLink link={Link} to="/">
          Add Product
        </ButtonLink>
      }
    >
      <InventoryTable />
    </AdminPageLayout>
  );
};
