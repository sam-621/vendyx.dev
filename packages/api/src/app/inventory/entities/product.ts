import { Entity, ID, fullyValidateEntity } from '@/shared/entities/entity'
import { UserInputError } from '@/shared/errors'
import { MakeAny, MakeOptional } from '@/shared/types/utils'
import { Product as DBProduct } from '@prisma/client'
import { z } from 'zod'

export class Product extends Entity implements DBProduct {
  private constructor(
    id: ID,
    createdAt: Date,
    updatedAt: Date,
    readonly name: string,
    readonly slug: string,
    readonly description: string | null,
    readonly enabled: boolean
  ) {
    super(id, createdAt, updatedAt)
  }

  public static fullyValidate(input: FullyValidateInput): Product {
    const validation = fullyValidateSchema.safeParse(input)

    if (!validation.success) {
      throw new UserInputError(validation.error.errors[0].message)
    }

    const { id, createdAt, updatedAt, name, slug, description, enabled } = validation.data

    return new Product(id, createdAt, updatedAt, name, slug, description ?? null, enabled)
  }

  public static partialValidate(input: PartialValidateInput): MakeOptional<Product> {
    const validation = partialValidateSchema.safeParse(input)

    if (!validation.success) {
      throw new UserInputError(validation.error.errors[0].message)
    }

    return validation.data
  }
}

const fullyValidateSchema = z
  .object({
    name: z
      .string({ required_error: 'Please add a name' })
      .min(3, 'Name should be greater than 3 chars'),
    slug: z
      .string({ required_error: 'Please add a slug' })
      .min(3, 'Slug should be greater than 3 chars'),
    description: z.string().optional(),
    enabled: z.boolean().default(true)
  } satisfies MakeAny<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>)
  .merge(fullyValidateEntity)

const partialValidateSchema = z
  .object({
    name: z
      .string({ required_error: 'Please add a name' })
      .min(3, 'Name should be greater than 3 chars')
      .optional(),
    slug: z
      .string({ required_error: 'Please add a slug' })
      .min(3, 'Slug should be greater than 3 chars')
      .optional(),
    description: z.string().optional().optional(),
    enabled: z.boolean().optional()
  } satisfies MakeAny<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>)
  .merge(fullyValidateEntity)

type FullyValidateInput = Pick<Product, 'name' | 'slug'> & {
  description?: Product['description']
  enabled?: Product['enabled'] | null
}

type PartialValidateInput = MakeOptional<
  Pick<Product, 'id' | 'name' | 'slug' | 'description' | 'enabled'>
>
