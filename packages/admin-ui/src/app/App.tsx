import { ThemeProvider } from '@vendyx/theme';
import '@vendyx/theme/dist/style.css';
import './style.css';
import { AppRouter } from './ui/routes/router';

function App() {
  return (
    <>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
