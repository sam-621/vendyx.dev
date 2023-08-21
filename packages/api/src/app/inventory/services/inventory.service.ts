import { Injectable } from '@nestjs/common'
import { InventoryRepository } from '../repositories'

@Injectable()
export class InventoryService {
  constructor(private repository: InventoryRepository) {}
}
