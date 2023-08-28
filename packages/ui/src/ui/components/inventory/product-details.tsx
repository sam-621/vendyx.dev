import { Select } from '@/theme/components'
import { Card, CardBody } from '@nextui-org/card'
import { Input, Textarea } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'
import { Chip } from '@nextui-org/chip'

export const ProductDetails = () => {
  return (
    <section className="grid grid-cols-[2fr,1fr] gap-6">
      <div className="flex flex-col gap-6">
        <Card>
          <CardBody className="flex flex-col gap-4">
            <Input label="Name" placeholder="Black T-shirt" labelPlacement="outside" radius="sm" />
            <Textarea label="Description" labelPlacement="outside" radius="sm" />
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
              <Input label="Hight" placeholder="0 cm" labelPlacement="outside" radius="sm" />
              <Input label="Width" placeholder="0 cm" labelPlacement="outside" radius="sm" />
              <Input label="Weight" placeholder="0 kg" labelPlacement="outside" radius="sm" />
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex flex-row items-center justify-between">
            <span className="text-xl">Variants</span>
            <Button variant="light" color="primary" className="font-semibold">
              Add Variant
            </Button>
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
            <Select />
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Collections"
              labelPlacement="outside"
              placeholder="Search collection"
              radius="sm"
            />
            <ul className="flex flex-col gap-4">
              <li className="text-sm font-normal">• Clothes</li>
              <li className="text-sm font-normal">• Electronics</li>
            </ul>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex flex-col gap-4">
            <Input label="Labels" labelPlacement="outside" placeholder="Search label" radius="sm" />
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
        </Card>
      </div>
    </section>
  )
}
