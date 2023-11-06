import { AdminPageLayout } from '@/ui/components/layouts';
import { Button } from '@/ui/theme/components';

export default function DashboardRoute() {
  return (
    <AdminPageLayout title="Dashboard" actions={<Button>Export</Button>}>
      <h1>Dashboard</h1>
    </AdminPageLayout>
  );
}
