import type { FC, PropsWithChildren } from 'react'
import { Logo } from '@/components/icons'
import { Button, Select, SelectItem } from '@/theme/components'
import { AppSidebar } from '../lists'
import { UserMenu } from '../menus'
import { StoreIcon } from 'lucide-react'

const HEADER_HEIGHT = '73px'

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="h-full">
      <header
        className={`flex justify-between py-4 px-8 border-b border-border h-[${HEADER_HEIGHT}]`}
      >
        <div className="flex items-center gap-4">
          <div>
            <Logo />
          </div>
          <span>/</span>
          <div className="flex items-center gap-4">
            <StoreIcon />
            <Select
              defaultValue="main"
              placeholder="Seleccione una tienda"
              itemClasses={{ trigger: 'w-[180px]' }}
            >
              <SelectItem className="text-left" value="main">
                Tienda principal
              </SelectItem>
              <SelectItem className="text-left" value="ext">
                Extrangero
              </SelectItem>
            </Select>
          </div>
        </div>
        <div className="flex gap-4">
          <Button className="text-muted-foreground w-60 h-9 justify-between" variant={'outline'}>
            Buscar en vendyx...
            <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
          <UserMenu />
        </div>
      </header>
      <div className={`grid grid-cols-10 gap-8 mr-8 h-[calc(100vh-${HEADER_HEIGHT})]`}>
        <AppSidebar />
        <main className="col-span-8 py-8 px-4">{children}</main>
      </div>
    </div>
  )
}

type Props = PropsWithChildren
