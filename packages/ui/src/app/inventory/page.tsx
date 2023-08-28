import { InventoryTable } from '@/components/inventory'
import { getProducts } from '@/core/Inventory/services/products'

export default async function InventoryPage() {
  const products = await getProducts()

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-foreground font-semibold text-4xl">Inventory</h1>
      <section>
        <InventoryTable products={products ?? []} />
      </section>
    </div>
  )
}
