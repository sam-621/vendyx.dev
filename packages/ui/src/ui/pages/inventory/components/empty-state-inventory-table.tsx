import { PlusIcon } from '@heroicons/react/24/outline'
import { RectangleStackIcon } from '@heroicons/react/24/solid'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

export const EmptyStateInventoryTable = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <RectangleStackIcon width={80} className="text-default-200" />
        <span className="text-2xl font-semibold">¿Qué es lo que quieres vender?</span>
        <p className="text-default-500 font-normal">
          Agrega productos y comienza a generar ganancias
        </p>
      </div>
      <Button
        as={Link}
        href="/inventory/create"
        color="primary"
        startContent={<PlusIcon width={16} />}
      >
        Agregar producto
      </Button>
    </div>
  )
}
