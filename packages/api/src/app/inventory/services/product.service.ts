import { Injectable } from '@nestjs/common'
import { ProductRepository } from '../repositories'
import { CreateProductInput } from '@/common/types/graphql'

@Injectable()
export class ProductService {
  constructor(private repository: ProductRepository) {}

  async createProduct(input: CreateProductInput) {
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

    return await this.repository.update(product.id, {
      variants: {
        create: input.variants?.map(v => {
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
                          name_productId: (opt?.name ?? '') + product.id
                        },
                        create: {
                          name_productId: (opt?.name ?? '') + product.id,
                          name: opt?.name ?? '',
                          productId: product.id
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
