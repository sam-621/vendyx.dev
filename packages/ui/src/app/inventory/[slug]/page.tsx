import { ProductDetails } from '@/components/inventory'
import { Breadcrumb } from '@/theme/components'
import { Button } from '@nextui-org/button'

export default async function CreateProductPage() {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb items={[{ label: 'Inventory', href: '/inventory' }, { label: 'Silloncito' }]} />
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-foreground font-semibold text-4xl">Create product</h1>
          <Button color="primary">Save product</Button>
        </div>
        <ProductDetails />
      </div>
    </div>
  )
}
