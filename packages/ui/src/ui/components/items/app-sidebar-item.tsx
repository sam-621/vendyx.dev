'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type FC, type ReactElement } from 'react';

import { cn } from '@/ui/theme';

export const AppSidebarItem: FC<Props> = ({ text, href, icon }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        'px-4 py-2 items-center flex gap-2 w-full justify-start hover:bg-secondary transition-colors rounded-md text-sm font-medium',
        {
          'bg-secondary': pathname === href
        }
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
