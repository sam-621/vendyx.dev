'use client'

import { isArray } from '@/core/shared/utils/arrays'
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  PlusIcon
} from '@heroicons/react/24/outline'
import {
  Card,
  CardBody,
  Table as NextUiTable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  type SelectionMode,
  Tabs,
  Tab,
  Button,
  Input
} from '@nextui-org/react'
import { useState, type ReactElement, type Key } from 'react'

export const Table = <T extends unknown>({
  columns,
  data,
  views = [{ name: 'All', key: 'all' }],
  getKey,
  selectionMode = 'multiple'
}: Props<T>) => {
  const [selectedTab, setSelectedTab] = useState<Key>(views[0].key)
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
        <div className="flex">
          <div className="w-full">
            <Tabs
              selectedKey={selectedTab}
              onSelectionChange={k => {
                setSelectedTab(k)
              }}
              variant="light"
              aria-label="Tabs variants"
              classNames={{
                panel: 'pt-5'
              }}
            >
              {views.map(v => {
                const currentData = (
                  isArray(data) ? data : (data as Record<string, T[]>)[v.key]
                ) as T[]

                return (
                  <Tab key={v.key} title={v.name} className="font-semibold text-sm">
                    <NextUiTable
                      removeWrapper
                      selectionMode={selectionMode}
                      aria-label="Example static collection table"
                    >
                      <TableHeader columns={columns}>
                        {c => <TableColumn key={c.field}>{c.name}</TableColumn>}
                      </TableHeader>
                      <TableBody items={currentData}>
                        {data => (
                          <TableRow key={getKey(data)}>
                            {columnKey => {
                              const currentColumn = columns.find(c => c.field === columnKey)

                              return (
                                <TableCell>
                                  {currentColumn?.render != null
                                    ? currentColumn.render(data)
                                    : data[columnKey as keyof T]}
                                </TableCell>
                              )
                            }}
                          </TableRow>
                        )}
                      </TableBody>
                    </NextUiTable>
                  </Tab>
                )
              })}
            </Tabs>
          </div>
          <div className="flex gap-4 items-center h-fit absolute right-5">
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
      </CardBody>
    </Card>
  )
}

type Props<T = unknown> = {
  columns: {
    name: string
    field: string
    render?: (data: T) => ReactElement | undefined
  }[]
  views?: { name: string; key: string }[]
  data: Record<string, T[]> | T[]
  getKey: (data: T) => string
  selectionMode?: SelectionMode
}
