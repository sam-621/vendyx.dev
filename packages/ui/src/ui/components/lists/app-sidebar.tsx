import clsx from 'clsx';
import { BarChart2Icon, BoxesIcon, PackageIcon, ShoppingCartIcon, UserIcon } from 'lucide-react';
import { type FC } from 'react';

import { AppSidebarItem } from '../items';

export const AppSidebar: FC<Props> = async ({ className }) => {
  return (
    <aside className={clsx('border-r h-full py-8 px-4', className)}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight pl-4">Catalgo</h2>
          <div className="flex flex-col gap-1">
            <AppSidebarItem
              href="/admin"
              icon={<BarChart2Icon className="flex-shrink-0" size={16} />}
              text="Dashboard"
            />

            <AppSidebarItem
              href="/admin/inventory"
              icon={<PackageIcon className="flex-shrink-0" size={16} />}
              text="Inventory"
            />

            <AppSidebarItem
              href="/admin/collections"
              icon={<BoxesIcon className="flex-shrink-0" size={16} />}
              text="Collections"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight pl-4">Ventas</h2>
          <div className="flex flex-col gap-1">
            <AppSidebarItem
              href="/admin/orders"
              icon={<ShoppingCartIcon className="flex-shrink-0" size={16} />}
              text="Orders"
            />

            <AppSidebarItem
              href="/admin/customers"
              icon={<UserIcon className="flex-shrink-0" size={16} />}
              text="Customers"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

type Props = {
  className?: string;
};
