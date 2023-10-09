import { Breadcrumb } from '@/theme/components'
import type { FC, PropsWithChildren } from 'react'

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        items={[{ label: 'Invetario', href: '/inventory' }, { label: 'Crear producto' }]}
      />
      <div className="flex flex-col gap-8">{children}</div>
    </div>
  )
}

type Props = PropsWithChildren
