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
  name: z.string().min(3),
  slug: z.string().min(3),
  description: z.string(),
  images: z.any(),
  price: z.preprocess(val => Number(val), z.number()),
  offerPrice: z.preprocess(val => Number(val), z.number()),
  costPerProduct: z.preprocess(val => Number(val), z.number()),
  weight: z.preprocess(val => Number(val), z.number())
})

type Return = {
  createProduct: (input: any) => void
}
