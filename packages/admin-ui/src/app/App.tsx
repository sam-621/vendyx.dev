import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@vendyx/theme';

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
          {/* <AuthWrapper> */}
          <AppRouter />
          {/* </AuthWrapper> */}
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
