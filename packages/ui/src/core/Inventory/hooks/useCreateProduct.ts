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

export const createProductSchema = z.object({
  name: z.string().min(3),
  slug: z.string().min(3),
  description: z.string()
})

type Return = {
  createProduct: (input: any) => void
}
