import { InventoryTable } from '@/components/inventory'

export default function InventoryPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-foreground font-semibold text-4xl">Inventory</h1>
      <section>
        <InventoryTable />
      </section>
    </div>
  )
}
