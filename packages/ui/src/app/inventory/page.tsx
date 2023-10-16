import { getProducts } from '@/core/inventory/services/products'
import { InventoryTable } from '@/pages/inventory/components'
import { Button, ButtonLink } from '@/theme/components'
import { PlusCircleIcon } from 'lucide-react'

export default async function InventoryRoute() {
  const products = await getProducts()

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-foreground font-bold text-3xl">Inventario</h1>
        <div className="flex gap-4">
          <Button variant={'secondary'}>Exportar</Button>
          <ButtonLink className="flex gap-2 flex-shrink-0" href="/inventory/create">
            <PlusCircleIcon size={16} /> Agregar producto
          </ButtonLink>
        </div>
      </div>
      <section>
        <InventoryTable products={products.items} />
      </section>
    </div>
  )
}
