import {
  BarChart2Icon,
  BoxesIcon,
  PackageIcon,
  ShoppingCartIcon,
  TagIcon,
  UserIcon
} from 'lucide-react'
import Link from 'next/link'

export const AppSidebar = async () => {
  return (
    <aside className="col-span-2 border-r h-full py-8 px-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold tracking-tight pl-4">Catálogo</h2>
          <div className="flex flex-col gap-1">
            <Link
              href={'/'}
              className="px-4 py-2 items-center flex gap-2 w-full justify-start hover:bg-secondary transition-colors rounded-md text-sm"
            >
              <BarChart2Icon className="flex-shrink-0" size={16} />
              Panel
            </Link>
            <Link
              href={'/inventory'}
              className="px-4 py-2 items-center flex gap-2 w-full justify-start hover:bg-secondary transition-colors rounded-md text-sm"
            >
              <PackageIcon className="flex-shrink-0" size={16} />
              Inventario
            </Link>
            <Link
              href={'/collections'}
              className="px-4 py-2 items-center flex gap-2 w-full justify-start hover:bg-secondary transition-colors rounded-md text-sm"
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
              className="px-4 py-2 items-center flex gap-2 w-full justify-start hover:bg-secondary transition-colors rounded-md text-sm"
            >
              <ShoppingCartIcon className="flex-shrink-0" size={16} />
              Ordenes
            </Link>
            <Link
              href={'/customers'}
              className="px-4 py-2 items-center flex gap-2 w-full justify-start hover:bg-secondary transition-colors rounded-md text-sm"
            >
              <UserIcon className="flex-shrink-0" size={16} />
              Clientes
            </Link>
            <Link
              href={'/cupons'}
              className="px-4 py-2 items-center flex gap-2 w-full justify-start hover:bg-secondary transition-colors rounded-md text-sm"
            >
              <TagIcon className="flex-shrink-0" size={16} />
              Cupones
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}

// eslint-disable-next-line no-lone-blocks
{
  /* const MENU = (d: Dictionary): Menu[] => [
  {
    text: d.modules.dashboard,
    href: '/',
    outlineIcon: <BarChart width={24} className="text-default-500" />,
    solidIcon: <BarChart width={24} className="text-primary-500" />
  },
  {
    text: d.modules.inventory,
    href: '/inventory',
    outlineIcon: <RectangleStackIconOutline width={24} className="text-default-500" />,
    solidIcon: <RectangleStackIconSolid width={24} className="text-primary-500" />
  },
  {
    text: d.modules.collections,
    href: '/collections',
    outlineIcon: <RectangleGroupIconOutline width={24} className="text-default-500" />,
    solidIcon: <RectangleGroupIconSolid width={24} className="text-primary-500" />
  },
  // {
  //   text: d.modules.,
  //   href: '/assets',
  //   outlineIcon: <PhotoIconOutline width={24} className="text-default-500" />,
  //   solidIcon: <PhotoIconSolid width={24} className="text-primary-500" />
  // },
  // {
  //   text: d.modules.,
  //   href: '/labels',
  //   outlineIcon: <TagIconOutline width={24} className="text-default-500" />,
  //   solidIcon: <TagIconSolid width={24} className="text-primary-500" />
  // },
  {
    isDivision: true
  },
  {
    text: d.modules.orders,
    href: '/orders',
    outlineIcon: <InboxIconOutline width={24} className="text-default-500" />,
    solidIcon: <InboxIconSolid width={24} className="text-primary-500" />
  },
  {
    text: d.modules.customers,
    href: '/customers',
    outlineIcon: <UserIconOutline width={24} className="text-default-500" />,
    solidIcon: <UserIconSolid width={24} className="text-primary-500" />
  },
  {
    text: d.modules.promotions,
    href: '/promotions',
    outlineIcon: <CheckBadgeIconOutline width={24} className="text-default-500" />,
    solidIcon: <CheckBadgeIconSolid width={24} className="text-primary-500" />
  },
  {
    isDivision: true
  },
  {
    text: d.modules.shipments,
    href: '/shipments',
    outlineIcon: <TruckIconOutline width={24} className="text-default-500" />,
    solidIcon: <TruckIconSolid width={24} className="text-primary-500" />
  },
  {
    text: d.modules.payments,
    href: '/payments',
    outlineIcon: <CreditCardIconOutline width={24} className="text-default-500" />,
    solidIcon: <CreditCardIconSolid width={24} className="text-primary-500" />
  }
  // {
  //   text: d.modules.,
  //   href: '/taxes',
  //   outlineIcon: <ReceiptPercentIconOutline width={24} className="text-default-500" />,
  //   solidIcon: <ReceiptPercentIconSolid width={24} className="text-primary-500" />
  // }
] */
}
