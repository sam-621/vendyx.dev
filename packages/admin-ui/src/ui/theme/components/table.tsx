'use client'

import {
  Card,
  CardBody,
  Table as NextUiTable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  type SelectionMode
} from '@nextui-org/react'
import type { ReactElement } from 'react'

export const Table = <T extends unknown>({
  columns,
  data,
  getKey,
  selectionMode = 'multiple'
}: Props<T>) => {
  return (
    <Card>
      <CardBody className="flex flex-col gap-5">
        <NextUiTable
          removeWrapper
          selectionMode={selectionMode}
          aria-label="Example static collection table"
        >
          <TableHeader columns={columns}>
            {c => <TableColumn key={c.field}>{c.name}</TableColumn>}
          </TableHeader>
          <TableBody items={data}>
            {data => (
              <TableRow key={getKey(data)}>
                {columnKey => {
                  const currentColumn = columns.find(c => c.field === columnKey)
                  console.log({
                    currentColumn
                  })

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
      </CardBody>
    </Card>
  )
}

type Props<T = unknown> = {
  columns: Array<{
    name: string
    field: string
    render?: (data: T) => ReactElement | undefined
  }>
  data: T[]
  getKey: (data: T) => string
  selectionMode?: SelectionMode
}
