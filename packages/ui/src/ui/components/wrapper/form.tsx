/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import type { FC, PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export const Form: FC<Props> = ({ onSubmit, children }) => {
  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    criteriaMode: 'all'
  })

  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

type Props = PropsWithChildren & {
  onSubmit: (input: any) => void
}
