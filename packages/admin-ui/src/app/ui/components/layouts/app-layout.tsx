import type { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import { CommandIcon } from 'lucide-react';

import { AppSidebar } from '../lists/app-sidebar';
import { UserMenu } from '../menus/user-menu';

export const AppLayout: FC<Props> = () => {
  return (
    <div className="h-full">
      <header
        className={`flex justify-between items-center py-4 px-8 border-b border-border h-[73px]`}
      >
        <div className="flex gap-2 items-center">
          <CommandIcon className="text-foreground" />
          <h1 className="text-foreground text-2xl font-normal">Vendyx</h1>
        </div>
        <div className="">
          <UserMenu />
        </div>
      </header>
      <div className={`grid grid-cols-10 mr-8 h-[calc(100vh-73px)]`}>
        <AppSidebar className="col-span-2" />
        <main className="col-span-8 py-8 px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

type Props = PropsWithChildren;
