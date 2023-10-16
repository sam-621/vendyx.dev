export type List<T> = {
  items: T[]
  totalItems: number
}

export type CommonAsset = {
  id: string
  source: string
}

export type CommonVariant = {
  id: string
  price: number
  stock: number
  sku: string
}

export type CommonCollection = {
  id: string
  name: string
  slug: string
}

export type CommonProduct = {
  id: string
  createdAt: Date
  name: string
  slug: string
  enabled: boolean
}
