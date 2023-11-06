import { type FC, type PropsWithChildren, type ReactElement } from 'react';

import { cn } from '@/ui/theme';

export const AdminPageLayout: FC<Props> = ({ title, actions, className, children }) => {
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <header className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold tracking-[0.625]">{title}</h2>
        <div>{actions}</div>
      </header>
      {children}
    </div>
  );
};

type Props = PropsWithChildren & {
  title: string;
  actions?: ReactElement;
  className?: string;
};
