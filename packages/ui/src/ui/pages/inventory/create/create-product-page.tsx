'use client'
import { ProductDetails } from '@/components/inventory'
import { CreateProductFormContext } from '@/core/inventory/contexts'
import { Button } from '@nextui-org/react'

export const CreateProductPage = () => {
  return (
    <CreateProductFormContext>
      <>
        <div className="flex items-center justify-between">
          <h1 className="text-foreground font-semibold text-4xl">Crear producto</h1>
          <div className="flex gap-4">
            <Button color="primary" type="submit">
              Guardar producto
            </Button>
          </div>
        </div>
        <ProductDetails />
      </>
    </CreateProductFormContext>
  )
}
