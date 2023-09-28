import { getDictionary } from '@/core/shared/lang'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { ChartBarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import type { FC } from 'react'

export const Breadcrumb: FC<Props> = async ({ items }) => {
  const d = await getDictionary('es')

  return (
    <nav className="flex gap-3 items-center">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-default-500 font-medium hover:text-default-900 transition-colors"
      >
        <ChartBarIcon width={16} />
        {d.modules.dashboard}
      </Link>
      <ChevronRightIcon width={16} className="text-default-500" />
      {items.map(item => (
        <>
          {item.href !== undefined ? (
            <>
              <Link
                href={item.href}
                className="text-sm text-default-500 font-medium hover:text-default-900 transition-colors"
              >
                {item.label}
              </Link>
              <ChevronRightIcon width={16} className="text-default-500" />
            </>
          ) : (
            <span className="text-sm text-default-500 font-medium hover:text-default-900 transition-colors">
              Silloncito
            </span>
          )}
        </>
      ))}
    </nav>
  )
}

type Props = {
  items: {
    label: string
    href?: string
  }[]
}
