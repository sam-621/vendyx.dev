import { Injectable } from '@nestjs/common'
import { ProductRepository } from '../repositories'
import { CreateProductInput, CreateProductVariantInput } from '@/shared/types'
import { Product } from '../inventory'

@Injectable()
export class ProductService {
  constructor(private repository: ProductRepository) {}

  async createProduct(input: CreateProductInput): Promise<Product | undefined> {
    const variantsHasOptions = input.variants?.some(v => v.optionValues) ?? false

    const defaultVariant = input.variants && !variantsHasOptions ? input.variants[0] : undefined

    const product = await this.repository.create({
      ...input,
      slug: input.slug.toLowerCase(),
      variant: defaultVariant
    })

    if (!variantsHasOptions) return product

    const productWitVariants = await this.createVariant(product.id, input.variants ?? [])

    return productWitVariants
  }

  async createVariant(productId: string, input: CreateProductVariantInput[]): Promise<Product> {
    // TODO: repeats option values
    return this.repository.update(productId, {
      variants: {
        create: input?.map(v => {
          return {
            sku: v.sku,
            price: v.price,
            stock: v.stock ?? undefined,
            enabled: v.enabled ?? undefined,
            optionValues: {
              create: v.optionValues?.map(opt => ({
                optionValue: {
                  create: {
                    value: opt?.value ?? '',
                    option: {
                      connectOrCreate: {
                        where: {
                          name_productId: (opt?.name ?? '') + productId
                        },
                        create: {
                          name_productId: (opt?.name ?? '') + productId,
                          name: opt?.name ?? '',
                          productId: productId
                        }
                      }
                    }
                  }
                }
              }))
            }
          }
        })
      }
    })
  }
}
