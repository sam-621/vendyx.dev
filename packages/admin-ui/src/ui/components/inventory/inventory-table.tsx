'use client'

import {
  MagnifyingGlassIcon,
  PlusIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline'
import {
  Button,
  Card,
  CardBody,
  Chip,
  Input,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
  User
} from '@nextui-org/react'

export const InventoryTable = () => {
  return (
    <Card>
      <CardBody className="flex flex-col gap-5">
        <div className="flex gap-4">
          <Input
            type="text"
            radius="sm"
            placeholder="Search Product"
            labelPlacement="outside"
            startContent={
              <MagnifyingGlassIcon
                width={24}
                className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
              />
            }
          />
          <Button
            startContent={<PlusIcon width={'full'} />}
            color="primary"
            radius="sm"
            className="w-fit"
          >
            Add Product
          </Button>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <Tabs variant={'light'} aria-label="Tabs variants">
              <Tab className="font-semibold text-sm" key="photos" title="All" />
              <Tab className="font-semibold text-sm" key="music" title="Enabled" />
              <Tab className="font-semibold text-sm" key="videos" title="On Sale" />
            </Tabs>
            <Button isIconOnly size="sm" variant="light" className="text-default-500">
              <PlusIcon width={20} />
            </Button>
          </div>
          <div className="flex gap-4">
            <label htmlFor="select" className="flex items-center text-default-500 text-small">
              Rows per page:
              <select
                id="select"
                className="bg-transparent outline-none text-default-500 text-small"
                // onChange={onRowsPerPageChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </label>
            <Button isIconOnly size="md" variant="bordered" className="text-default-500">
              <AdjustmentsHorizontalIcon width={24} />
            </Button>
          </div>
        </div>
        <Table
          // bottomContent={
          //   <div className="flex w-full justify-center">
          //     <Pagination
          //       isCompact
          //       showControls
          //       showShadow
          //       color="primary"
          //       page={1}
          //       total={10}
          //       // onChange={page => setPage(page)}
          //     />
          //   </div>
          // }
          removeWrapper
          selectionMode="multiple"
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn>Product</TableColumn>
            <TableColumn>Price</TableColumn>
            <TableColumn>Stock</TableColumn>
            <TableColumn>Variants</TableColumn>
            <TableColumn>Status</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>
                <User
                  avatarProps={{
                    radius: 'sm',
                    src: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small'
                  }}
                  name={'Grey fabric sofa'}
                />
              </TableCell>
              <TableCell>$ 276</TableCell>
              <TableCell>8</TableCell>
              <TableCell>22</TableCell>
              <TableCell>
                <Chip className="capitalize" color={'success'} variant="flat">
                  {'Enabled'}
                </Chip>
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>
                <User
                  avatarProps={{
                    radius: 'sm',
                    src: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small'
                  }}
                  name={'Grey fabric sofa'}
                />
              </TableCell>
              <TableCell>$ 276</TableCell>
              <TableCell>8</TableCell>
              <TableCell>22</TableCell>
              <TableCell>
                <Chip className="capitalize" color={'success'} variant="flat">
                  {'Enabled'}
                </Chip>
              </TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>
                <User
                  avatarProps={{
                    radius: 'sm',
                    src: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small'
                  }}
                  name={'Grey fabric sofa'}
                />
              </TableCell>
              <TableCell>$ 276</TableCell>
              <TableCell>8</TableCell>
              <TableCell>22</TableCell>
              <TableCell>
                <Chip className="capitalize" color={'success'} variant="flat">
                  {'Enabled'}
                </Chip>
              </TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>
                <User
                  avatarProps={{
                    radius: 'sm',
                    src: 'https://demo.vendure.io/assets/preview/69/nathan-fertig-249917-unsplash__preview.jpg?preset=small'
                  }}
                  name={'Grey fabric sofa'}
                />
              </TableCell>
              <TableCell>$ 276</TableCell>
              <TableCell>8</TableCell>
              <TableCell>22</TableCell>
              <TableCell>
                <Chip className="capitalize" color={'success'} variant="flat">
                  {'Enabled'}
                </Chip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  )
}
