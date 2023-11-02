import { Module } from '@nestjs/common'
import { ProductResolver } from './resolvers'
import { ProductService } from './services'
import { ProductRepository } from './repository'

@Module({
  providers: [ProductRepository, ProductService, ProductResolver]
})
export class InventoryModule {}
