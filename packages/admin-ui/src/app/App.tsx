import { useEffect } from 'react';

import { ThemeProvider } from '@vendyx/theme';

import { authenticateAdmin } from './services/fetchers';
import { AppRouter } from './ui/routes/router';

import '@vendyx/theme/dist/style.css';
import './style.css';

function App() {
  useEffect(() => {
    void (async () => {
      const res = await authenticateAdmin({ username: 'admin', password: '123456' });

      console.log({
        res
      });
    })();
  }, []);
  return (
    <>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
