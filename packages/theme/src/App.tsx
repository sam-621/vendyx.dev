import { Button } from './components';
import './styles/index.css';
import { ThemeProvider } from './utils';

function App() {
  return (
    <ThemeProvider>
      <Button>Holaa</Button>
    </ThemeProvider>
  );
}

export default App;
