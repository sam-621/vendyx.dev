import type { FC, PropsWithChildren } from 'react'
import { Input } from '@nextui-org/input'
import { Avatar } from '@nextui-org/avatar'
import { Logo } from '@/components/icons'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Kbd } from '@nextui-org/kbd'
import { SidebarMenu } from '../lists'

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header className="flex justify-between py-4 px-8 border-b border-divider">
        <div className="flex items-center gap-4">
          <Logo />
          <Input
            radius="sm"
            type="text"
            placeholder="Search in vendyx"
            labelPlacement="outside"
            startContent={
              <MagnifyingGlassIcon
                width={24}
                className="text-2xl text-default-400 pointer-events-none flex-shrink-0"
              />
            }
            endContent={<Kbd keys={['command']}>K</Kbd>}
          />
        </div>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </header>
      <div className="grid grid-cols-10 gap-8 m-8">
        <SidebarMenu />
        <main className="col-span-8">{children}</main>
      </div>
    </div>
  )
}

type Props = PropsWithChildren
