import { Module } from '@nestjs/common'
import { ProductResolver } from './resolvers'
import { ProductService } from './services'
import { ProductRepository, ProductVariantRepository } from './repositories'

@Module({
  providers: [ProductRepository, ProductVariantRepository, ProductService, ProductResolver]
})
export class InventoryModule {}
