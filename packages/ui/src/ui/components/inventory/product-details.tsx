import { Dropzone, Select } from '@/theme/components'
import { Card, CardBody } from '@nextui-org/card'
import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'
import type { FC } from 'react'
import type { GetProductDetailsQueryResult } from '@/core/inventory/types'
import { ConnectForm } from '../wrappers'
import { isArray } from '@/core/shared/utils/arrays'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { Tooltip } from '@nextui-org/react'

export const ProductDetails: FC<Props> = ({ product }) => {
  const variant = isArray(product?.variants) ? product?.variants[0] : null
  const productState = product?.enabled === undefined || product?.enabled ? 'enabled' : 'disabled'

  return (
    <section className="grid grid-cols-[2fr,1fr] gap-6">
      <div className="flex flex-col gap-6">
        <Card>
          <CardBody className="flex flex-col gap-4">
            <div className="flex gap-4">
              <ConnectForm>
                {({ register, formState: { errors } }) => (
                  <Input
                    {...register('name', { value: product?.name })}
                    label="Nombre"
                    placeholder="Black T-shirt"
                    labelPlacement="outside"
                    radius="sm"
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
                  labelPlacement="outside"
                  radius="sm"
                />
              )}
            </ConnectForm>
            <ConnectForm>{({ register }) => <Dropzone {...register('images')} />}</ConnectForm>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex flex-col gap-4">
            <div className="flex gap-4">
              <ConnectForm>
                {({ register }) => (
                  <Input
                    {...register('price', { value: variant?.price })}
                    type="number"
                    label="Precio"
                    placeholder="$ 0,00"
                    labelPlacement="outside"
                    radius="sm"
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
                    labelPlacement="outside"
                    radius="sm"
                    endContent={
                      <Tooltip
                        content={
                          <p>
                            Introduce un valor mayor a tu precio,
                            <br /> usualmente mostrado con una tacha
                          </p>
                        }
                        showArrow
                        placement="bottom"
                      >
                        <QuestionMarkCircleIcon width={24} />
                      </Tooltip>
                    }
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
                    labelPlacement="outside"
                    radius="sm"
                  />
                )}
              </ConnectForm>
              <Input
                label="Ganancia"
                placeholder="- -"
                labelPlacement="outside"
                radius="sm"
                isDisabled
              />
              <Input
                label="Margen"
                placeholder="- -"
                labelPlacement="outside"
                radius="sm"
                isDisabled
              />
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex flex-col gap-4">
            <Checkbox>Este producto requiere envío</Checkbox>
            <div className="flex gap-4">
              <ConnectForm>
                {({ register }) => (
                  <Input
                    {...register('weight', { value: variant?.weight })}
                    label="Peso"
                    placeholder="0 kg"
                    labelPlacement="outside"
                    radius="sm"
                  />
                )}
              </ConnectForm>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex flex-col gap-4">
            <span className="text-xl">Zona de peligro</span>
            <Button color="danger" className="w-fit">
              Eliminar producto
            </Button>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col gap-6">
        <Card>
          <CardBody className="flex flex-col gap-4">
            <ConnectForm>
              {({ register }) => (
                <Select
                  {...register('state', {
                    value: productState
                  })}
                  defaultSelectedKeys={[productState]}
                  label="Estado"
                  options={[
                    { label: 'Habilitado', value: 'enabled' },
                    { label: 'Desabilitado', value: 'disabled' }
                  ]}
                />
              )}
            </ConnectForm>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex flex-col gap-4">
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
          </CardBody>
        </Card>
      </div>
    </section>
  )
}

type Props = {
  product?: GetProductDetailsQueryResult
}
