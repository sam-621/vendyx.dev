'use client';

import { cn } from '@vendyx/theme';
import { type FC, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

export const AppSidebarItem: FC<Props> = ({ text, href, icon }) => {
  // const pathname = usePathname();

  return (
    <Link
      to={href}
      className={cn(
        'px-4 py-2 items-center flex gap-2 w-full justify-start hover:bg-secondary transition-colors rounded-md text-sm font-medium'
        // {
        //   'bg-secondary': pathname === href
        // }
      )}
    >
      {icon}
      {text}
    </Link>
  );
};

type Props = {
  text: string;
  href: string;
  icon: ReactElement;
};
