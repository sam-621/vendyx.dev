import { UserInputError } from '@/shared/errors'
import { ID } from '@/shared/types/models'
import { MakeAny } from '@/shared/types/utils'
import { Product as DBProduct } from '@prisma/client'
import { randomUUID } from 'crypto'
import { z } from 'zod'

const productSchema = z.object({
  id: z.string().uuid().default(randomUUID()),
  createdAt: z.date().default(new Date()),
  updatedAt: z.date().default(new Date()),
  name: z
    .string({ required_error: 'Please add a name' })
    .min(3, 'Name should be greater than 3 chars'),
  slug: z
    .string({ required_error: 'Please add a slug' })
    .min(3, 'Slug should be greater than 3 chars'),
  description: z.string().optional(),
  enabled: z.boolean().default(true)
} satisfies MakeAny<Product>)

export class Product implements DBProduct {
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
    const validation = productSchema.safeParse(input)

    if (!validation.success) {
      throw new UserInputError(validation.error.errors[0].message)
    }

    const { id, createdAt, updatedAt, name, slug, description, enabled } = validation.data

    return new Product(id, createdAt, updatedAt, name, slug, description ?? null, enabled)
  }
}

type CreateProduct = Pick<Product, 'name' | 'slug'> & {
  description?: Product['description']
  enabled?: Product['enabled'] | null
}
