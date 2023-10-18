import { cn } from '@/theme/utils'
import type { FC, PropsWithChildren, ReactElement } from 'react'

export const PageLayout: FC<Props> = ({ title, actions, children, className }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        {title !== undefined && <h1 className="text-foreground font-bold text-3xl">{title}</h1>}
        {actions !== undefined && <div className="flex gap-4">{actions}</div>}
      </div>
      <section className={cn('', className)}>{children}</section>
    </div>
  )
}

type Props = PropsWithChildren & {
  title?: string
  actions?: ReactElement
  className?: string
}
