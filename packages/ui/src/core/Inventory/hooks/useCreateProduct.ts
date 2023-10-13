import z from 'zod'
import { createProduct as createProductFromApi } from '../services'

export const useCreateProduct = (): Return => {
  const createProduct = async (input: FormValues): Promise<void> => {
    await createProductFromApi({
      name: input.name,
      slug: input.name,
      description: input.description,
      enabled: input.state === 'enabled',
      variants: undefined,
      labelValuesIds: undefined,
      assetsIds: undefined,
      collectionsIds: undefined
    })
  }

  return {
    createProduct
  }
}

export const createProductValidator = z.object({
  name: z.string().min(3, 'El nombre debe de ser mayor a 3 caracteres'),
  description: z.string(),
  assets: z.preprocess(value => {
    const fileList = value as FileList

    if (fileList.item === undefined) throw new Error('The input value is not an image')

    return fileList.item(1)
  }, z.any()),
  price: z.preprocess(value => Number(value), z.number()),
  offerPrice: z.preprocess(value => Number(value), z.number()),
  costPerProduct: z.preprocess(value => Number(value), z.number()),
  weight: z.preprocess(value => Number(value), z.number()),
  state: z.enum(['enabled', 'disabled']),
  collections: z.preprocess(value => String(value === undefined ? '' : value), z.string())
})

type Return = {
  createProduct: (input: FormValues) => Promise<void>
}

type FormValues = {
  name: string
  description: string
  assets: string[]
  price: number
  offerPrice: number
  costPerProduct: number
  weight: number
  state: 'enabled' | 'disabled'
  collections: string[]
}
