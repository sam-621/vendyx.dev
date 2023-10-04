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
import { type ReactElement, type Key, useState, useMemo } from 'react'

export const Table = <T extends unknown>({
  columns,
  data,
  getKey,
  searchFn,
  action,
  views = [{ name: 'All', key: 'all' }],
  rowsPerPageOptions = [],
  filters,
  selectionMode = 'multiple'
}: Props<T>) => {
  const [selectedTab, setSelectedTab] = useState<Key>(views[0].key)
  const [rowsPerPage, setRowsPerPage] = useState<number>(rowsPerPageOptions[0] ?? 5)
  const [query, setQuery] = useState<string>('')

  const initialData = (isArray(data) ? data : (data as Record<string, T[]>)[selectedTab]) as T[]

  const filteredDataByQuery = useMemo(() => {
    if (searchFn == null) return initialData

    if (query.length === 0) {
      return initialData
    }

    return searchFn(query, initialData)
  }, [query, initialData])

  return (
    <Card>
      <CardBody className="flex flex-col gap-5">
        <div className="flex gap-4">
          {searchFn != null && (
            <Input
              type="text"
              value={query}
              onChange={e => {
                setQuery(e.target.value)
              }}
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
          )}
          {action != null && (
            <Button
              onClick={action?.fn}
              className="w-fit"
              color="primary"
              radius="sm"
              startContent={<PlusIcon width={'full'} />}
            >
              {action?.text}
            </Button>
          )}
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
                      <TableBody items={filteredDataByQuery.slice(0, rowsPerPage)}>
                        {data => (
                          <TableRow key={getKey(data)}>
                            {columnKey => {
                              const currentColumn = columns.find(c => c.field === columnKey)

                              return (
                                <TableCell>
                                  <>
                                    {currentColumn?.render != null
                                      ? currentColumn.render(data)
                                      : data[columnKey as keyof T]}
                                  </>
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
            {rowsPerPageOptions.length !== 0 && (
              <label htmlFor="select" className="flex items-center text-default-500 text-small">
                Rows per page:
                <select
                  id="select"
                  className="bg-transparent outline-none text-default-500 text-small"
                  onChange={e => {
                    setRowsPerPage(Number(e.target.value))
                  }}
                >
                  {rowsPerPageOptions.map(opt => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
            )}
            {filters != null && (
              <Button isIconOnly size="md" variant="bordered" className="text-default-500">
                <AdjustmentsHorizontalIcon width={24} />
              </Button>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

type Props<T = unknown> = {
  /**
   * Columns in your table
   *
   * @example
   * const columns = [
   *   {
   *      name: 'Product',
   *      field: 'product'
   *      render: data => (
   *        <User
   *          avatarProps={{
   *            radius: 'sm',
   *            src: data.img
   *            name={data.product}
   *          }}
   *        />
   *      )
   *   },
   *   { name: 'Price', field: 'price', render: data => <span>{`$${data.price}`}</span> },
   *   { name: 'Stock', field: 'stock' },
   * ]
   */
  columns: {
    name: string
    field: string
    /**
     * Add a custom element to render to your table cell
     */
    render?: (data: T) => ReactElement | undefined
  }[]
  data: Record<string, T[]> | T[]
  /**
   * Function that determinate what property of your data use as a key prop
   * @param data data received from the current iteration
   * @returns the key to use in key prop
   */
  getKey: (data: T) => string
  /**
   * Function that execute every time search query change
   * @param query Search query written in the input
   * @param data data in the table
   * @returns filtered data
   */
  searchFn?: (query: string, data: T[]) => T[]
  /**
   * Main action in the table
   */
  action?: {
    text: string
    fn: () => void
  }
  /**
   * Tabs to manage different views in the table
   */
  views?: { name: string; key: string }[]
  rowsPerPageOptions?: number[]
  filters?: boolean
  selectionMode?: SelectionMode
}
