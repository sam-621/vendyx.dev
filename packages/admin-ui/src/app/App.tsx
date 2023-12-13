import { Button, ThemeProvider } from '@vendyx/theme';
import '@vendyx/theme/dist/style.css';
import './style.css';

function App() {
  return (
    <>
      <ThemeProvider>
        <h1 className="text-destructive">Hola</h1>
        <Button>Holaa</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
