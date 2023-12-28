import { type FC, type PropsWithChildren, type ReactElement } from 'react';

import { cn } from '@vendyx/theme';

import { Breadcrumbs } from '../lists';

export const AdminPageLayout: FC<Props> = ({
  title,
  breadcrumbs,
  actions,
  className,
  children
}) => {
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <div className="flex flex-col gap-3">
        {breadcrumbs?.length && <Breadcrumbs items={breadcrumbs} />}
        <header className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold tracking-[0.625]">{title}</h2>
          <div>{actions}</div>
        </header>
      </div>
      {children}
    </div>
  );
};

type Props = PropsWithChildren & {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
  actions?: ReactElement;
  className?: string;
};
