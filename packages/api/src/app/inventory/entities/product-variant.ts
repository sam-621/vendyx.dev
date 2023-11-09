import { Entity, ID, Price, fullyValidateEntity } from '@/shared/entities/entity'
import { UserInputError } from '@/shared/errors'
import { ProductVariant as DBProductVariant } from '@prisma/client'
import { MakeAny } from '@/shared/types/utils'
import { z } from 'zod'

export class ProductVariant
  extends Entity
  implements Omit<DBProductVariant, 'options' | 'productId'>
{
  private constructor(
    id: ID,
    createdAt: Date,
    updatedAt: Date,
    readonly sku: string,
    readonly price: Price,
    readonly costPerUnit: Price,
    readonly comparisonPrice: Price | null,
    readonly stock: number,
    readonly weight: number | null,
    readonly enabled: boolean
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
      sku,
      price,
      costPerUnit,
      comparisonPrice,
      stock,
      weight,
      enabled
    )
  }

  public static generateSku() {
    return Math.random().toString(36).substring(2, 8).toUpperCase()
  }
}

const fullyValidateSchema = z
  .object({
    sku: z.string().min(3).default(ProductVariant.generateSku()),
    price: z
      .number()
      .min(0)
      .transform(arg => Entity.createPrice(arg)),
    costPerUnit: z
      .number()
      .default(0)
      .transform(arg => Entity.createPrice(arg)),
    comparisonPrice: z
      .number()
      .optional()
      .transform(arg => (arg === undefined ? null : Entity.createPrice(arg))),
    stock: z.number().int().min(0),
    weight: z
      .number()
      .optional()
      .transform(arg => arg ?? null),
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
