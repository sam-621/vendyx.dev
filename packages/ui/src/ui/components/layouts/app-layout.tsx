import type { FC, PropsWithChildren } from 'react'
import { Avatar } from '@nextui-org/avatar'
import { Logo } from '@/components/icons'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { SidebarMenu } from '../lists'
import { ModeToggle } from '../toggles'
import { Button, Input } from '@/theme/components'

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header className="flex justify-between py-4 px-8 border-b border-border">
        <div className="flex items-center gap-4">
          <Logo />
          {/* <Input
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
          /> */}
          <Button className="text-muted-foreground w-60 h-9 justify-between" variant={'outline'}>
            Buscar en vendyx...
            <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </div>
        <div className="flex gap-2">
          {/* <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" /> */}
          <ModeToggle />
        </div>
      </header>
      <div className="grid grid-cols-10 gap-8 m-8">
        {/* <SidebarMenu /> */}
        <main className="col-span-8">{children}</main>
      </div>
    </div>
  )
}

type Props = PropsWithChildren
