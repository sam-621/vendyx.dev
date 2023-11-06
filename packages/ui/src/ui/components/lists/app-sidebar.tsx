import clsx from 'clsx';
import {
  BarChart2Icon,
  BoxesIcon,
  PackageIcon,
  ShoppingCartIcon,
  TagIcon,
  UserIcon
} from 'lucide-react';
import Link from 'next/link';
import { type FC } from 'react';

export const AppSidebar: FC<Props> = async ({ className }) => {
  return (
    <aside className={clsx('border-r h-full py-8 px-4', className)}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight pl-4">Catálogo</h2>
          <div className="flex flex-col gap-1">
            <Link
              href={'/'}
              className="px-4 py-2 items-center flex gap-2 w-full justify-start hover:bg-secondary transition-colors rounded-md text-sm font-medium"
            >
              <BarChart2Icon className="flex-shrink-0" size={16} />
              Panel
            </Link>
            <Link
              href={'/inventory'}
              className="px-4 py-2 items-center flex gap-2 w-full justify-start hover:bg-secondary transition-colors rounded-md text-sm font-medium"
            >
              <PackageIcon className="flex-shrink-0" size={16} />
              Inventario
            </Link>
            <Link
              href={'/collections'}
              className="px-4 py-2 items-center flex gap-2 w-full justify-start hover:bg-secondary transition-colors rounded-md text-sm font-medium"
            >
              <BoxesIcon className="flex-shrink-0" size={16} />
              Colecciones
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight pl-4">Ventas</h2>
          <div className="flex flex-col gap-1">
            <Link
              href={'/orders'}
              className="px-4 py-2 items-center flex gap-2 w-full justify-start hover:bg-secondary transition-colors rounded-md text-sm font-medium"
            >
              <ShoppingCartIcon className="flex-shrink-0" size={16} />
              Ordenes
            </Link>
            <Link
              href={'/customers'}
              className="px-4 py-2 items-center flex gap-2 w-full justify-start hover:bg-secondary transition-colors rounded-md text-sm font-medium"
            >
              <UserIcon className="flex-shrink-0" size={16} />
              Clientes
            </Link>
            <Link
              href={'/cupons'}
              className="px-4 py-2 items-center flex gap-2 w-full justify-start hover:bg-secondary transition-colors rounded-md text-sm font-medium"
            >
              <TagIcon className="flex-shrink-0" size={16} />
              Cupones
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

type Props = {
  className?: string;
};
