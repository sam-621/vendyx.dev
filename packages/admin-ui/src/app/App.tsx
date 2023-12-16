import { QueryClientProvider } from '@tanstack/react-query';
import { Avatar, ThemeProvider } from '@vendyx/theme';

import { Notification } from '@/lib/notifications';
import { queryClient } from '@/lib/query-client';

import { AppRouter } from './ui/routes';

// import { AuthWrapper } from './auth-wrapper';
import '@vendyx/theme/dist/style.css';
import './style.css';

function App() {
  return (
    <>
      <ThemeProvider>
        <Notification />
        <QueryClientProvider client={queryClient}>
          {/* For some reason this prevents that the ui make the common flash when working with light and dark mode */}
          {/* TODO: Should i move this component to ThemeProvider to avoid this behavior? */}
          <Avatar
            className="hidden"
            src="https://ui.shadcn.com/avatars/01.png"
            alt="@sam"
            fallBack="CN"
          />

          <AppRouter />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
