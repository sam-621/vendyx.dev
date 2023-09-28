import { Dropzone, Select } from '@/theme/components'
import { Card, CardBody } from '@nextui-org/card'
import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'

export const ProductDetails = () => {
  return (
    <section className="grid grid-cols-[2fr,1fr] gap-6">
      <div className="flex flex-col gap-6">
        <Card>
          <CardBody className="flex flex-col gap-4">
            <Input label="Name" placeholder="Black T-shirt" labelPlacement="outside" radius="sm" />
            <Textarea label="Description" labelPlacement="outside" radius="sm" />
            <Dropzone />
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Input label="Price" placeholder="$ 0,00" labelPlacement="outside" radius="sm" />
              <Input
                label="Offer price"
                placeholder="$ 0,00"
                labelPlacement="outside"
                radius="sm"
              />
            </div>
            <div className="flex gap-4">
              <Input
                label="Cost per product"
                placeholder="$ 0,00"
                labelPlacement="outside"
                radius="sm"
              />
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
              <Input label="Width" placeholder="0 cm" labelPlacement="outside" radius="sm" />
              <Input label="Weight" placeholder="0 kg" labelPlacement="outside" radius="sm" />
            </div>
          </CardBody>
        </Card>

        {/* Variants */}

        {/* <Card>
          <CardBody className="flex flex-row items-center justify-between">
            <span className="text-xl">Variants</span>
            <Button variant="light" color="primary" className="font-semibold">
              Add Variant
            </Button>
          </CardBody>
        </Card> */}

        {/* <Card>
          <CardBody className="flex flex-col gap-4">
            <h3 className="text-xl">Variants</h3>
            <div className="flex flex-col gap-4">
              <Input
                label="Property name"
                placeholder="eg. Size"
                labelPlacement="outside"
                radius="sm"
              />

              <Input label="Values" placeholder="eg. L" labelPlacement="outside" radius="sm" />
              <div className="flex justify-end">
                <Button color="primary" className="w-fit">
                  Save
                </Button>
              </div>
            </div>
            <Divider />

            <Button
              startContent={<PlusIcon width={20} />}
              variant="light"
              color="primary"
              className="w-fit font-semibold"
              radius="sm"
            >
              Add another option
            </Button>
          </CardBody>
        </Card> */}

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
            <Select
              defaultSelectedKeys={['enabled']}
              label="State"
              options={[
                { label: 'Enabled', value: 'enabled' },
                { label: 'Disabled', value: 'disabled' }
              ]}
            />
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex flex-col gap-4">
            <Select
              label="Collections"
              placeholder="Select collections"
              selectionMode="multiple"
              options={[
                { label: 'Clothes', value: 'clothes' },
                { label: 'Electronics', value: 'electronics' }
              ]}
            />
            <ul className="flex flex-col gap-4">
              <li className="text-sm font-normal">• Clothes</li>
              <li className="text-sm font-normal">• Electronics</li>
            </ul>
          </CardBody>
        </Card>

        {/* Labels */}
        {/* <Card>
          <CardBody className="flex flex-col gap-4">
            <Select
              label="Labels"
              placeholder="Select labels"
              selectionMode="multiple"
              options={[
                { label: 'Plants', value: 'plants' },
                { label: 'Electronics', value: 'electronics' }
              ]}
            />
            <ul className="flex flex-col gap-4">
              <li className="text-sm font-normal">
                <Chip color="success" variant="flat">
                  Plants
                </Chip>
              </li>
              <li className="text-sm font-normal">
                <Chip color="success" variant="flat">
                  Electronic
                </Chip>
              </li>
            </ul>
          </CardBody>
        </Card> */}
      </div>
    </section>
  )
}
