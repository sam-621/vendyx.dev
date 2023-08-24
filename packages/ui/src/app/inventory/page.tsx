'use client'
import { InventoryTable } from '@/components/inventory'
import { getProducts } from '@/core/Inventory/services/products'
import { useEffect } from 'react'

export default function InventoryPage() {
  useEffect(() => {
    ;(async () => {
      const result = await getProducts()
      console.log({
        result
      })
    })()
  }, [])

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-foreground font-semibold text-4xl">Inventory</h1>
      <section>
        <InventoryTable />
      </section>
    </div>
  )
}
