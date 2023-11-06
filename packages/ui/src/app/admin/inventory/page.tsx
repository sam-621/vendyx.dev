import { PlusCircleIcon } from '@/theme/icons';
import { AdminPageLayout } from '@/ui/components/layouts';
import { ButtonLink } from '@/ui/theme/components';

export default function InventoryRoute() {
  return (
    <AdminPageLayout
      title="Inventory"
      breadcrumbs
      actions={
        <ButtonLink className="flex gap-2 flex-shrink-0" href="/inventory/create">
          <PlusCircleIcon size={16} /> Agregar producto
        </ButtonLink>
      }
    >
      <h1>Inventory</h1>
    </AdminPageLayout>
  );
}
