/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import type { FC, PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

export const Form: FC<Props> = ({ onSubmit, validator, className, children }) => {
  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(validator)
  })

  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={twMerge('', className)}>
        {children}
      </form>
    </FormProvider>
  )
}

type Props = PropsWithChildren & {
  onSubmit: (input: any) => Promise<void>
  validator?: any
  className?: string
}
