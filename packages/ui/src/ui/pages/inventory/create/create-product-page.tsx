import { ProductDetails } from '@/components/inventory'
import { DetailsLayout } from '@/components/layouts'
import { Button } from '@nextui-org/button'

export const CreateProductPage = () => {
  return (
    <DetailsLayout actions={<Button color="primary">Guardar producto</Button>}>
      <ProductDetails />
    </DetailsLayout>
  )
}
