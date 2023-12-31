import { type FC } from 'react';

import { cn } from '@vendyx/theme';
import {
  BarChart2Icon,
  BoxesIcon,
  PackageIcon,
  SettingsIcon,
  ShoppingCartIcon,
  UserIcon
} from 'lucide-react';

import { AppSidebarItem } from '../items';

export const AppSidebar: FC<Props> = ({ className }) => {
  return (
    <aside
      className={cn(
        'border-r border-border h-full py-8 px-4 flex flex-col justify-between',
        className
      )}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight pl-4">Catalog</h2>
          <div className="flex flex-col gap-1">
            <AppSidebarItem
              href={'/'}
              icon={<BarChart2Icon className="flex-shrink-0" size={16} />}
              text="Dashboard"
            />

            <AppSidebarItem
              href={`/inventory`}
              icon={<PackageIcon className="flex-shrink-0" size={16} />}
              text="Inventory"
            />

            <AppSidebarItem
              href={`/collections`}
              icon={<BoxesIcon className="flex-shrink-0" size={16} />}
              text="Collections"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight pl-4">Sales</h2>
          <div className="flex flex-col gap-1">
            <AppSidebarItem
              href={`/orders`}
              icon={<ShoppingCartIcon className="flex-shrink-0" size={16} />}
              text="Orders"
            />

            <AppSidebarItem
              href={`/customers`}
              icon={<UserIcon className="flex-shrink-0" size={16} />}
              text="Customers"
            />
          </div>
        </div>
      </div>

      <AppSidebarItem
        href={`/settings`}
        icon={<SettingsIcon className="flex-shrink-0" size={16} />}
        text="Settings"
      />
    </aside>
  );
};

type Props = {
  className?: string;
};
