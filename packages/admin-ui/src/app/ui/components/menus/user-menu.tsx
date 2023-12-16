import { type FC } from 'react';

import {
  Avatar,
  Button,
  cn,
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
  DropdownMenuTrigger,
  useTheme
} from '@vendyx/theme';
import { Laptop, LogOutIcon, Moon, Sun, SunMoon, User } from 'lucide-react';

import { useLogout } from '@/services/admin';

export const UserMenu: FC<Props> = ({ className }) => {
  const { setTheme } = useTheme();
  const { logout, isLoading } = useLogout();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button size={'icon'} variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar src="https://ui.shadcn.com/avatars/01.png" alt="@sam" fallBack="CN" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2" align="end">
        <DropdownMenuLabel className="font-normal flex flex-col gap-2 p-2">
          <p className="text-sm font-medium leading-none">Admin</p>
          <p className="text-xs leading-none text-muted-foreground">sam_621@gmail.com</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <SunMoon className="mr-2 h-4 w-4" />
              <span>Theme</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun className="mr-2 h-4 w-4  scale-100 transition-all" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  <Laptop className="mr-2 h-4 w-4 transition-all " />
                  <span>System</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon className="mr-2 h-4 w-4 transition-all " />
                  <span>Dark</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0">
          <Button
            type="submit"
            variant={'ghost'}
            className="h-full w-full flex justify-start px-2 py-[6px]"
            onClick={logout}
            isLoading={isLoading}
          >
            {!isLoading && (
              <LogOutIcon className="mr-2 h-4 w-4 transition-all text-red-500 hover:text-red-500" />
            )}
            <span
              className={cn({
                'text-red-500 hover:text-red-500': !isLoading,
                'text-muted-foreground': isLoading
              })}
            >
              Logout
            </span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

type Props = {
  className?: string;
};
