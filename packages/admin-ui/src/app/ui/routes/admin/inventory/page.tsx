import { Link } from 'react-router-dom';

import { ButtonLink } from '@vendyx/theme';

import { AdminPageLayout } from '@/components/layouts';

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
      Inventory
    </AdminPageLayout>
  );
};
