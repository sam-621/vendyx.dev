import { Injectable } from '@nestjs/common'
import { ProductRepository } from '../repositories'
import { CreateProductInput, CreateProductVariantInput } from '@/common/types/graphql'
import { Product } from '../inventory'

@Injectable()
export class ProductService {
  constructor(private repository: ProductRepository) {}

  async createProduct(input: CreateProductInput): Promise<Product | undefined> {
    const variantsHasOptions = input.variants?.find(v => v.optionValues)

    const product = await this.repository.create({
      name: input.name,
      slug: input.slug,
      description: input.description ?? undefined,
      enabled: input.enabled ?? undefined,
      assets: { create: input.assetsIds?.map(id => ({ assetId: id, position: 0 })) },
      collections: { create: input.collectionsIds?.map(id => ({ collectionId: id })) },
      labelValues: { create: input.labelValuesIds?.map(id => ({ labelValueId: id })) },
      ...(!variantsHasOptions && {
        variants: {
          create:
            input.variants?.map(v => ({
              sku: v.sku,
              price: v.price,
              enabled: v.enabled ?? undefined,
              stock: v.stock ?? undefined
            })) ?? []
        }
      })
    })

    if (!variantsHasOptions) return product

    const productWitVariants = await this.createVariant(product.id, input.variants ?? [])

    return productWitVariants
  }

  async createVariant(productId: string, input: CreateProductVariantInput[]): Promise<Product> {
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
