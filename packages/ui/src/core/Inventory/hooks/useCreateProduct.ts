import z from 'zod'

export const useCreateProduct = (): Return => {
  const createProduct = (input: any): void => {
    console.log({
      input
    })
  }

  return {
    createProduct
  }
}

export const createProductValidator = z.object({
  name: z.string().min(3, 'El nombre debe de ser mayor a 3 caracteres'),
  description: z.string(),
  images: z.preprocess(value => {
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
  createProduct: (input: any) => void
}
