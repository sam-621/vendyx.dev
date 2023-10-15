'use client'
import { Form } from '@/components/wrappers'
import { ProductDetails } from './product-details'
import { createProductValidator, useCreateProduct } from '@/core/inventory/hooks'
import { Button } from '@/theme/components'

export const CreateProductForm = () => {
  const { createProduct } = useCreateProduct()

  return (
    <Form
      onSubmit={createProduct}
      validator={createProductValidator}
      className="flex flex-col gap-8"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-foreground font-semibold text-4xl">Crear producto</h1>
        <div className="flex gap-4">
          <Button color="primary" type="submit">
            Guardar producto
          </Button>
        </div>
      </div>
      <ProductDetails />
    </Form>
  )
}
