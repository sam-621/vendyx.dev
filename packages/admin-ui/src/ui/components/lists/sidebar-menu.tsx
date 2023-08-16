// import { ChartBarIcon } from '@heroicons/react/24/outline'
import {
  ChartBarIcon as ChartBarIconOutline,
  RectangleStackIcon as RectangleStackIconOutline
} from '@heroicons/react/24/outline'
import {
  ChartBarIcon as ChartBarIconSolid,
  RectangleStackIcon as RectangleStackIconSolid
} from '@heroicons/react/24/solid'
import { SidebarMenuItem } from '../items'

export const SidebarMenu = () => {
  return (
    <aside className="col-span-2">
      <ul className="flex flex-col gap-6">
        <SidebarMenuItem
          text="Dashboard"
          href="/"
          outlineIcon={<ChartBarIconOutline width={24} className="text-default-500" />}
          solidIcon={<ChartBarIconSolid width={24} className="text-primary-500" />}
        />
        <SidebarMenuItem
          text="Inventory"
          href="/inventory"
          outlineIcon={<RectangleStackIconOutline width={24} className="text-default-500" />}
          solidIcon={<RectangleStackIconSolid width={24} className="text-primary-500" />}
        />
      </ul>
    </aside>
  )
}
