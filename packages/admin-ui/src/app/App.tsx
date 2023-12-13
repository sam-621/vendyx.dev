import { ThemeProvider } from '@vendyx/theme';
import { AppRouter } from './ui/routes/router';
import '@vendyx/theme/dist/style.css';
import './style.css';

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
