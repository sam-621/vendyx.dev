import { AppRouter } from './ui/routes';
import { AppWrapper } from './app-wrapper';

import '@vendyx/theme/dist/style.css';
import './style.css';

function App() {
  return (
    <>
      <AppWrapper>
        <AppRouter />
      </AppWrapper>
    </>
  );
}

export default App;
