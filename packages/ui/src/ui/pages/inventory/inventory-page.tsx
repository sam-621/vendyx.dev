import { PlusCircleIcon } from '@/theme/icons';
import { AdminPageLayout } from '@/ui/components/layouts';
import { ButtonLink } from '@/ui/theme/components';

import { InventoryTable } from './components';

export const InventoryPage = async () => {
  return (
    <AdminPageLayout
      title="Inventory"
      breadcrumbs
      actions={
        <ButtonLink className="flex gap-2 flex-shrink-0" href="/admin/inventory/create">
          <PlusCircleIcon size={16} /> Add product
        </ButtonLink>
      }
    >
      <InventoryTable />
    </AdminPageLayout>
  );
};
