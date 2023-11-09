import { z } from 'zod'
import { MakeAny } from '../types/utils'
import { randomUUID } from 'crypto'
import { Decimal } from '@prisma/client/runtime/library'

export class Entity {
  constructor(readonly id: ID, readonly createdAt: Date, readonly updatedAt: Date) {}

  public static createId(): ID {
    return randomUUID()
  }

  public static createDate(): Date {
    return new Date()
  }

  public static createPrice(price: number): Price {
    return new Decimal(price)
  }
}

export const fullyValidateEntity = z.object({
  id: z.string().uuid().default(Entity.createId()),
  createdAt: z.date().default(Entity.createDate()),
  updatedAt: z.date().default(Entity.createDate())
} satisfies MakeAny<Entity>)

export type ID = string
export type Price = Decimal
