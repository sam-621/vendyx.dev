import {
  ChartBarIcon as ChartBarIconOutline,
  RectangleStackIcon as RectangleStackIconOutline,
  RectangleGroupIcon as RectangleGroupIconOutline,
  InboxIcon as InboxIconOutline,
  UserIcon as UserIconOutline,
  CheckBadgeIcon as CheckBadgeIconOutline,
  TruckIcon as TruckIconOutline,
  CreditCardIcon as CreditCardIconOutline
} from '@heroicons/react/24/outline'
import {
  ChartBarIcon as ChartBarIconSolid,
  RectangleStackIcon as RectangleStackIconSolid,
  RectangleGroupIcon as RectangleGroupIconSolid,
  InboxIcon as InboxIconSolid,
  UserIcon as UserIconSolid,
  CheckBadgeIcon as CheckBadgeIconSolid,
  TruckIcon as TruckIconSolid,
  CreditCardIcon as CreditCardIconSolid
} from '@heroicons/react/24/solid'
import { SidebarMenuItem } from '../items'
import type { Menu } from '@/core/shared/types'
import { Divider } from '@nextui-org/divider'
import { type Dictionary, getDictionary } from '@/core/shared/lang'

export const SidebarMenu = async () => {
  const d = await getDictionary('es') // en

  return (
    <aside className="col-span-2">
      <ul className="flex flex-col gap-6">
        {MENU(d).map(m => (
          <>
            {m.isDivision ? (
              <Divider />
            ) : (
              <SidebarMenuItem
                key={m?.href}
                text={m?.text ?? ''}
                href={m?.href ?? ''}
                outlineIcon={m?.outlineIcon}
                solidIcon={m?.solidIcon}
              />
            )}
          </>
        ))}
      </ul>
    </aside>
  )
}

const MENU = (d: Dictionary): Menu[] => [
  {
    text: d.modules.dashboard,
    href: '/',
    outlineIcon: <ChartBarIconOutline width={24} className="text-default-500" />,
    solidIcon: <ChartBarIconSolid width={24} className="text-primary-500" />
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
]
