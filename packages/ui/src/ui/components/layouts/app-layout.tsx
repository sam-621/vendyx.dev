import { CommandIcon } from 'lucide-react';
import type { FC, PropsWithChildren } from 'react';

import { Button } from '@/ui/theme/components';

import { AppSidebar } from '../lists/app-sidebar';
import { UserMenu } from '../menus/user-menu';

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="h-full">
      <header
        className={`flex justify-between items-center py-4 px-8 border-b border-border h-[73px]`}
      >
        <div>
          <CommandIcon />
          <h1>Vendyx</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button className="text-muted-foreground w-60 h-9 justify-between" variant={'outline'}>
            Buscar en vendyx...
            <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
          <UserMenu />
        </div>
      </header>
      <div className={`grid grid-cols-10 gap-8 mr-8 h-[calc(100vh-73px)]`}>
        <AppSidebar />
        <main className="col-span-8 py-8 px-4">{children}</main>
      </div>
    </div>
  );
};

type Props = PropsWithChildren;
