'use client'
import type { FC, ReactNode } from 'react'
import { type FieldValues, type UseFormReturn, useFormContext } from 'react-hook-form'

export const ConnectForm: FC<Props> = ({ children }) => {
  const methods = useFormContext()

  return children({ ...methods })
}

type Props = {
  children: (props: UseFormReturn<FieldValues, any, undefined>) => ReactNode
}
