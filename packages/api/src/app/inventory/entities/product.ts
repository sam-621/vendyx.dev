import { UserInputError } from '@/shared/errors'
import { ID } from '@/shared/types/models'
import { randomUUID } from 'crypto'
import { z } from 'zod'

const productSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z
    .string({ required_error: 'Please add a name' })
    .min(3, 'Name should be greater than 3 chars'),
  slug: z
    .string({ required_error: 'Please add a slug' })
    .min(3, 'Slug should be greater than 3 chars'),
  description: z.string().nullable(),
  enabled: z.boolean()
})

export class Product {
  private constructor(
    readonly id: ID,
    readonly createdAt: Date,
    readonly updatedAt: Date,
    readonly name: string,
    readonly slug: string,
    readonly description: string | null,
    readonly enabled: boolean
  ) {}

  public static create(input: CreateProduct): Product {
    const product: Product = {
      ...input,
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
      description: input.description ?? null,
      enabled: input.enabled ?? true
    }
    const validation = productSchema.safeParse(product)

    if (!validation.success) {
      throw new UserInputError(validation.error.errors[0].message)
    }

    const { id, createdAt, updatedAt, name, slug, description, enabled } = validation.data

    return new Product(id, createdAt, updatedAt, name, slug, description, enabled)
  }
}

type CreateProduct = Pick<Product, 'name' | 'slug'> & {
  description?: string | null
  enabled?: boolean | null
}
