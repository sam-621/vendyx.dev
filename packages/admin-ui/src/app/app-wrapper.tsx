import { type FC, type PropsWithChildren } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@vendyx/theme';

import { Notification } from '@/lib/notifications';
import { queryClient } from '@/lib/query-client';

export const AppWrapper: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider>
      <Notification />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

type Props = PropsWithChildren;
