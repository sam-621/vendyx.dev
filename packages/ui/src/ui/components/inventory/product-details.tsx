import { Dropzone, Select } from '@/theme/components'
import { Card, CardBody } from '@nextui-org/card'
import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'
import type { FC } from 'react'
import type { GetProductDetailsQueryResult } from '@/core/inventory/types'
import { ConnectForm } from '../wrappers'
import { isArray } from '@/core/shared/utils/arrays'

export const ProductDetails: FC<Props> = ({ product }) => {
  const variant = isArray(product?.variants) ? product?.variants[0] : null

  return (
    <section className="grid grid-cols-[2fr,1fr] gap-6">
      <div className="flex flex-col gap-6">
        <Card>
          <CardBody className="flex flex-col gap-4">
            <div className="flex gap-4">
              <ConnectForm>
                {({ register, formState: { errors } }) => {
                  console.log({
                    errors
                  })
                  return (
                    <Input
                      {...register('name', { value: product?.name })}
                      label="Name"
                      placeholder="Black T-shirt"
                      labelPlacement="outside"
                      radius="sm"
                    />
                  )
                }}
              </ConnectForm>
              <ConnectForm>
                {({ register }) => (
                  <Input
                    {...register('slug', { value: product?.slug })}
                    label="Slug"
                    placeholder="Black T-shirt"
                    labelPlacement="outside"
                    radius="sm"
                  />
                )}
              </ConnectForm>
            </div>
            <ConnectForm>
              {({ register }) => (
                <Textarea
                  {...register('description', { value: product?.description })}
                  label="Description"
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
                    label="Price"
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
                    label="Offer price"
                    placeholder="$ 0,00"
                    labelPlacement="outside"
                    radius="sm"
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
                    label="Cost per product"
                    placeholder="$ 0,00"
                    labelPlacement="outside"
                    radius="sm"
                  />
                )}
              </ConnectForm>
              <Input
                label="Revenue"
                placeholder="- -"
                labelPlacement="outside"
                radius="sm"
                isDisabled
              />
              <Input
                label="Margin"
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
            <Checkbox>This product requires shipping</Checkbox>
            <div className="flex gap-4">
              <ConnectForm>
                {({ register }) => (
                  <Input
                    {...register('weight', { value: variant?.weight })}
                    label="Weight"
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
            <span className="text-xl">Danger zone</span>
            <Button color="danger" className="w-fit">
              Delete product
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
                  {...register('state')}
                  defaultSelectedKeys={['enabled']}
                  label="State"
                  options={[
                    { label: 'Enabled', value: 'enabled' },
                    { label: 'Disabled', value: 'disabled' }
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
                  label="Collections"
                  placeholder="Select collections"
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
