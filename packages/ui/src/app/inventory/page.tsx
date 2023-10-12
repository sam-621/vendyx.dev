import { getProducts } from '@/core/inventory/services/products'
import { InventoryTable } from '@/pages/inventory/components'

export default async function InventoryRoute() {
  const products = await getProducts()

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-foreground font-semibold text-4xl">Inventario</h1>
      <section>
        <InventoryTable products={products} />
      </section>
    </div>
  )
}
