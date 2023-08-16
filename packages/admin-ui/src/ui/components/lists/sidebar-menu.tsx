import {
  ChartBarIcon as ChartBarIconOutline,
  RectangleStackIcon as RectangleStackIconOutline
} from '@heroicons/react/24/outline'
import {
  ChartBarIcon as ChartBarIconSolid,
  RectangleStackIcon as RectangleStackIconSolid
} from '@heroicons/react/24/solid'
import { SidebarMenuItem } from '../items'
import type { Menu } from '@/core/shared/types'

export const SidebarMenu = () => {
  return (
    <aside className="col-span-2">
      <ul className="flex flex-col gap-6">
        {MENU.map(m => (
          <SidebarMenuItem
            key={m.href}
            text={m.text}
            href={m.href}
            outlineIcon={m.outlineIcon}
            solidIcon={m.solidIcon}
          />
        ))}
      </ul>
    </aside>
  )
}

const MENU: Menu[] = [
  {
    text: 'Dashboard',
    href: '/',
    outlineIcon: <ChartBarIconOutline width={24} className="text-default-500" />,
    solidIcon: <ChartBarIconSolid width={24} className="text-primary-500" />
  },
  {
    text: 'Inventory',
    href: '/inventory',
    outlineIcon: <RectangleStackIconOutline width={24} className="text-default-500" />,
    solidIcon: <RectangleStackIconSolid width={24} className="text-primary-500" />
  }
]
