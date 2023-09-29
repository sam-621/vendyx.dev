export interface Product {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  description: string
  slug: string
  enabled: boolean
}

export interface Variant {
  id: string
  createdAt: Date
  updatedAt: Date
  enabled: boolean
  price: number
  stock: number
  sku: string
}
