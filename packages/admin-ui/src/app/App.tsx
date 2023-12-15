import { useEffect } from 'react';

import { authenticateAdmin } from './services/fetchers';
import { AppRouter } from './ui/routes';
import { AppWrapper } from './app-wrapper';

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
      <AppWrapper>
        <AppRouter />
      </AppWrapper>
    </>
  );
}

export default App;
