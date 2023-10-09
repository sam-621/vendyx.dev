import { useForm, type UseFormReturn } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(3),
  slug: z.string().min(3),
  description: z.string()
})

export const useCreateProductForm = (): UseFormReturn<FormInput, any, undefined> & {
  onSubmit: (input: FormInput) => void
} => {
  const methods = useForm<FormInput>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    criteriaMode: 'all',
    resolver: zodResolver(schema)
  })

  const onSubmit = (input: FormInput): void => {
    console.log({
      input
    })
  }

  return {
    ...methods,
    onSubmit
  }
}

type FormInput = {
  name: string
  slug: string
  description: string
}
