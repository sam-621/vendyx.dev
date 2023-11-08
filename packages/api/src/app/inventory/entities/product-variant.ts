import { Entity, ID, fullyValidateEntity } from '@/shared/entities/entity'
import { UserInputError } from '@/shared/errors'
import { ProductVariant as DBProductVariant } from '@/shared/types/graphql'
import { MakeAny } from '@/shared/types/utils'
import { z } from 'zod'

export class ProductVariant extends Entity implements Omit<DBProductVariant, 'options'> {
  private constructor(
    id: ID,
    createdAt: Date,
    updatedAt: Date,
    readonly price: number,
    readonly costPerUnit: number,
    readonly stock: number,
    readonly enabled: boolean,
    readonly comparisonPrice?: (number | null) | undefined,
    readonly sku?: (string | null) | undefined,
    readonly weight?: (number | null) | undefined
  ) {
    super(id, createdAt, updatedAt)
  }

  public static fullyValidate(input: FullyValidateInput): ProductVariant {
    const validation = fullyValidateSchema.safeParse(input)

    if (!validation.success) {
      throw new UserInputError(validation.error.errors[0].message)
    }

    const {
      id,
      createdAt,
      updatedAt,
      price,
      costPerUnit,
      stock,
      enabled,
      comparisonPrice,
      sku,
      weight
    } = validation.data

    return new ProductVariant(
      id,
      createdAt,
      updatedAt,
      price,
      costPerUnit,
      stock,
      enabled,
      comparisonPrice,
      sku,
      weight
    )
  }

  public static generateSku() {
    return Math.random().toString(36).substring(2, 8).toUpperCase()
  }
}

const fullyValidateSchema = z
  .object({
    sku: z.string().min(3).default(ProductVariant.generateSku()),
    price: z.number().min(0),
    costPerUnit: z.number().default(0),
    comparisonPrice: z.number().optional(),
    stock: z.number().int().min(0),
    weight: z.number().optional(),
    enabled: z.boolean().default(true)
  } satisfies MakeAny<Omit<ProductVariant, 'id' | 'createdAt' | 'updatedAt'>>)
  .merge(fullyValidateEntity)

type FullyValidateInput = Pick<
  ProductVariant,
  'sku' | 'price' | 'costPerUnit' | 'comparisonPrice' | 'stock' | 'weight'
> & {
  enabled?: ProductVariant['enabled'] | null
  costPerUnit?: ProductVariant['costPerUnit'] | null
}
