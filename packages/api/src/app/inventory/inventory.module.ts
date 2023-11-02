import { Module } from '@nestjs/common'
import { ProductResolver } from './resolvers'
import { ProductService } from './services'
import { ProductRepository } from './repositories'

@Module({
  providers: [ProductRepository, ProductService, ProductResolver]
})
export class InventoryModule {}
