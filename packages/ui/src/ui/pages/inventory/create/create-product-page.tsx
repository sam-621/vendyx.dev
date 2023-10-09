/* eslint-disable @typescript-eslint/no-misused-promises */
import { ProductDetails } from '@/components/inventory'
import { DetailsLayout } from '@/components/layouts'
import { CreateProductFormContext } from '@/core/inventory/contexts'
import { Button } from '@nextui-org/react'

export const CreateProductPage = () => {
  return (
    <CreateProductFormContext>
      <DetailsLayout
        actions={
          <Button color="primary" type="submit">
            Guardar producto
          </Button>
        }
      >
        <ProductDetails />
      </DetailsLayout>
    </CreateProductFormContext>
  )
}
