import { ProductDetails } from '@/components/inventory'
// import { getProductDetails } from '@/core/inventory/services'
import { Breadcrumb } from '@/theme/components'
import { Button } from '@nextui-org/button'

export default async function CreateProductPage() {
  // const productDetails = await getProductDetails({ slug })
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={[{ label: 'Invetario', href: '/inventory' }, { label: 'Silloncito' }]} />
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-foreground font-semibold text-4xl">Silloncito</h1>
          <Button color="primary">Guardar producto</Button>
        </div>
        <ProductDetails />
      </div>
    </div>
  )
}
