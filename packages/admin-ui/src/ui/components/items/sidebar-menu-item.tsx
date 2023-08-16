'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC, ReactElement } from 'react'

export const SidebarMenuItem: FC<Props> = ({ text, href, outlineIcon, solidIcon }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li className="flex gap-3">
      {isActive ? solidIcon : outlineIcon}
      <Link
        href={href}
        className={`font-semibold ${isActive ? 'text-primary-500' : 'text-default-500'}`}
      >
        {text}
      </Link>
    </li>
  )
}

type Props = {
  text: string
  href: string
  solidIcon: ReactElement
  outlineIcon: ReactElement
}
