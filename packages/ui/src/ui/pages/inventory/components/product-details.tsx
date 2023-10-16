import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Dropzone,
  Input,
  Select,
  SelectItem,
  Textarea
} from '@/theme/components'
import type { FC } from 'react'
import type { DetailedProduct } from '@/core/inventory/types'
import { ConnectForm } from '../../../components/wrappers'
import { isArray } from '@/core/shared/utils/arrays'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { Tooltip } from '@nextui-org/tooltip'
import { CardBody } from '@nextui-org/react'

export const ProductDetails: FC<Props> = ({ product }) => {
  const variant = isArray(product?.variants) ? product?.variants[0] : null
  const productState = product?.enabled === undefined || product?.enabled ? 'enabled' : 'disabled'

  return (
    <section className="grid grid-cols-[2fr,1fr] gap-6">
      <div className="flex flex-col gap-6">
        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            <div className="flex gap-4">
              <ConnectForm>
                {({ register, formState: { errors } }) => (
                  <Input
                    {...register('name', { value: product?.name })}
                    label="Nombre"
                    placeholder="Black T-shirt"
                    errorMessage={String(errors.name?.message ?? '')}
                  />
                )}
              </ConnectForm>
            </div>
            <ConnectForm>
              {({ register }) => (
                <Textarea
                  {...register('description', { value: product?.description })}
                  label="Descripción"
                />
              )}
            </ConnectForm>
            <ConnectForm>{({ register }) => <Dropzone {...register('assets')} />}</ConnectForm>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            <div className="flex gap-4">
              <ConnectForm>
                {({ register }) => (
                  <Input
                    {...register('price', { value: variant?.price })}
                    type="number"
                    label="Precio"
                    placeholder="$ 0,00"
                  />
                )}
              </ConnectForm>
              <ConnectForm>
                {({ register }) => (
                  <Input
                    {...register('offerPrice', { value: variant?.offerPrice })}
                    type="number"
                    label="Precio comparado"
                    placeholder="$ 0,00"
                    // endContent={
                    //   <Tooltip
                    //     content={
                    //       <p>
                    //         Introduce un valor mayor a tu precio,
                    //         <br /> usualmente mostrado con una tacha
                    //       </p>
                    //     }
                    //     showArrow
                    //     placement="bottom"
                    //   >
                    //     <QuestionMarkCircleIcon width={24} />
                    //   </Tooltip>
                    // }
                  />
                )}
              </ConnectForm>
            </div>
            <div className="flex gap-4">
              <ConnectForm>
                {({ register }) => (
                  <Input
                    {...register('costPerProduct', { value: variant?.costPerProduct })}
                    type="number"
                    label="Costo por producto"
                    placeholder="$ 0,00"
                  />
                )}
              </ConnectForm>
              <Input label="Ganancia" placeholder="- -" disabled />
              <Input label="Margen" placeholder="- -" disabled />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            <Checkbox label="Este producto requiere envío" />
            <div className="flex gap-4">
              <ConnectForm>
                {({ register }) => (
                  <Input
                    {...register('weight', { value: variant?.weight })}
                    label="Peso"
                    placeholder="0 kg"
                  />
                )}
              </ConnectForm>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            <span className="text-xl">Zona de peligro</span>
            <Button variant="destructive" className="w-fit">
              Eliminar producto
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-6">
        <Card>
          <CardContent className="p-4">
            <ConnectForm>
              {({ register }) => (
                <Select
                  {...register('state', {
                    value: productState
                  })}
                  placeholder="Estado"
                  label="Estado"
                  defaultValue={productState}
                  // defaultSelectedKeys={[productState]}
                  // label="Estado"
                  // options={[
                  //   { label: 'Habilitado', value: 'enabled' },
                  //   { label: 'Desabilitado', value: 'disabled' }
                  // ]}
                >
                  <SelectItem value="enabled">Habilitado</SelectItem>
                  <SelectItem value="disabled">Desabilitado</SelectItem>
                </Select>
              )}
            </ConnectForm>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            <ConnectForm>
              {({ register }) => (
                <Select
                  {...register('collection')}
                  label="Colecciones"
                  placeholder="Selecciona colleciones"
                  selectionMode="multiple"
                  options={[
                    { label: 'Clothes', value: 'clothes' },
                    { label: 'Electronics', value: 'electronics' }
                  ]}
                />
              )}
            </ConnectForm>
            <ul className="flex flex-col gap-4">
              <li className="text-sm font-normal">• Clothes</li>
              <li className="text-sm font-normal">• Electronics</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

type Props = {
  product?: DetailedProduct
}
