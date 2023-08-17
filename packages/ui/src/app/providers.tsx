'use client'

import { NextUIProvider } from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react'

export const Providers: FC<Props> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>
}

type Props = PropsWithChildren
