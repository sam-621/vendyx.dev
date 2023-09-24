import { CreateProductInput, Product } from '@/common/types/graphql'
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ProductRepository } from '../repositories'

@Resolver('Product')
export class ProductResolver {
  constructor(private repository: ProductRepository) {}

  @Mutation('createProduct')
  async create(@Args('input') input: CreateProductInput) {
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
        create: input.variants?.map(v => ({
          sku: v.sku,
          price: v.price,
          stock: v.stock ?? undefined,
          enabled: v.enabled ?? undefined,
          optionValues: {
            create: [
              {
                optionValue: {
                  create: {
                    value: 'S',
                    option: {
                      create: {
                        name: 'Size',
                        productId: product.id
                      }
                    }
                  }
                }
              }
            ]
          }
        }))
      }
    })
  }

  @Query('products')
  async products() {
    return this.repository.findMany()
  }

  @Query('product')
  async product(@Args('id') id: string) {
    return this.repository.findOne(id)
  }

  @ResolveField('variants')
  async variants(@Parent() product: Product) {
    return this.repository.getVariantsOnProduct(product.id)
  }

  @ResolveField('collections')
  async collections(@Parent() product: Product) {
    return this.repository.getCollectionsOnProduct(product.id)
  }

  @ResolveField('assets')
  async assets(@Parent() product: Product) {
    return this.repository.getAssetsOnProduct(product.id)
  }

  @ResolveField('labelValues')
  async labelValues(@Parent() product: Product) {
    return this.repository.getLabelValuesOnProduct(product.id)
  }

  @ResolveField('options')
  async options(@Parent() product: Product) {
    return this.repository.getOptionsOnProduct(product.id)
  }
}
