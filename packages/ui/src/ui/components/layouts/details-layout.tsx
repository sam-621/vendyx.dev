import type { PropsWithChildren, ReactElement } from 'react'

export const DetailsLayout = ({ actions, children }: Props) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-foreground font-semibold text-4xl">Crear producto</h1>
        <div className="flex gap-4">{actions}</div>
      </div>
      {children}
    </>
  )
}

type Props = PropsWithChildren & {
  actions: ReactElement
}
