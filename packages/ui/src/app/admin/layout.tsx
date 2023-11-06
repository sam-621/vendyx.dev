import { type PropsWithChildren } from 'react';

import { AppLayout } from '@/ui/components/layouts';

export default function Layout({ children }: Props) {
  return <AppLayout>{children}</AppLayout>;
}

type Props = PropsWithChildren;
