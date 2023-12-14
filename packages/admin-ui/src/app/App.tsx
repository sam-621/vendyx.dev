import { ThemeProvider } from '@vendyx/theme';
import { AppRouter } from './ui/routes/router';
import '@vendyx/theme/dist/style.css';
import './style.css';
import { useEffect } from 'react';
import { gqlFetch } from './services/fetchers';

function App() {
  useEffect(() => {
    (async () => {
      const res = await gqlFetch({
        query: /* GraphQL */ `
          mutation AuthenticateAdmin($input: AuthenticateAdminInput!) {
            authenticateAdmin(input: $input)
          }
        `,
        variables: {
          input: {
            username: 'admin',
            password: '123456'
          }
        }
      });

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
