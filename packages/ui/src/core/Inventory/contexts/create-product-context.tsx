/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import type { FC, ReactElement } from 'react'
import { FormProvider } from 'react-hook-form'
import { useCreateProductForm } from '../hooks'

export const CreateProductFormContext: FC<Props> = ({ children }) => {
  const methods = useCreateProductForm()
  const { handleSubmit, onSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        {children}
      </form>
    </FormProvider>
  )
}

type Props = {
  children: ReactElement
}
