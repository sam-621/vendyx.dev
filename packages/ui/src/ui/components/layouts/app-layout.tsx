import type { FC, PropsWithChildren } from 'react'
import { Logo } from '@/components/icons'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/theme/components'
import { Laptop, Moon, Sun, SunMoon, User } from 'lucide-react'

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header className="flex justify-between py-4 px-8 border-b border-border">
        <div className="flex items-center gap-4">
          <Logo />
          <Button className="text-muted-foreground w-60 h-9 justify-between" variant={'outline'}>
            Buscar en vendyx...
            <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar>
                  <AvatarImage
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2" align="end">
              <DropdownMenuLabel className="font-normal flex flex-col gap-2">
                <p className="text-sm font-medium leading-none">Admin</p>
                <p className="text-xs leading-none text-muted-foreground">sam_621@gmail.com</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <SunMoon className="mr-2 h-4 w-4" />
                    <span>Tema</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Sun className="mr-2 h-4 w-4  scale-100 transition-all" />
                        <span>Claro</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Laptop className="mr-2 h-4 w-4 transition-all " />
                        <span>Sistema</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Moon className="mr-2 h-4 w-4 transition-all " />
                        <span>Obscuro</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
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
