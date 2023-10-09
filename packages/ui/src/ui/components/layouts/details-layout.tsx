import { Breadcrumb } from '@/theme/components'
import type { PropsWithChildren, ReactElement } from 'react'

export const DetailsLayout = ({ actions, children }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb
        items={[{ label: 'Invetario', href: '/inventory' }, { label: 'Crear producto' }]}
      />
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-foreground font-semibold text-4xl">Crear producto</h1>
          <div className="flex gap-4">{actions}</div>
        </div>
        {children}
      </div>
    </div>
  )
}

type Props = PropsWithChildren & {
  actions: ReactElement
}
