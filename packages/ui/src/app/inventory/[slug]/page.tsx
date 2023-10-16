import { ProductDetails } from '@/pages/inventory/components'
import { Breadcrumb, Button } from '@/theme/components'

export default function ProductDetailsPage({ params: { slug } }: Props) {
  // const productDetails = await getProductDetails({ slug })
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={[{ label: 'Invetario', href: '/inventory' }, { label: 'Silloncito' }]} />
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-foreground font-semibold text-4xl">Silloncito</h1>
          <Button>Guardar producto</Button>
        </div>
        <ProductDetails />
      </div>
    </div>
  )
}

type Props = {
  params: {
    slug: string
  }
}
