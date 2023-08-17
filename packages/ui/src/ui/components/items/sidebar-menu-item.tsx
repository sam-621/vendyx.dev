'use client'

import type { Menu } from '@/core/shared/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'

export const SidebarMenuItem: FC<Props> = ({ text, href, outlineIcon, solidIcon }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li className="flex gap-3">
      {isActive ? solidIcon : outlineIcon}
      <Link
        href={href}
        className={`font-semibold text-sm ${isActive ? 'text-primary-500' : 'text-default-500'}`}
      >
        {text}
      </Link>
    </li>
  )
}

type Props = Required<Pick<Menu, 'text' | 'href' | 'outlineIcon' | 'solidIcon'>>
