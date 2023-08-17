'use client'

import { isArray } from '@/core/shared/utils/arrays'
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
  Tab
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
        <Tabs
          selectedKey={selectedTab}
          onSelectionChange={k => {
            setSelectedTab(k)
          }}
          variant="light"
          aria-label="Tabs variants"
          classNames={{
            panel: 'p-0'
          }}
        >
          {views.map(v => {
            const currentData = (isArray(data) ? data : (data as Record<string, T[]>)[v.key]) as T[]

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
