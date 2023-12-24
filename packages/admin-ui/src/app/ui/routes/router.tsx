import {
  BrowserRouter,
  // createBrowserRouter,
  Route,
  // RouterProvider,
  Routes
} from 'react-router-dom';

import { AuthWrapper } from 'src/app/auth-wrapper';

// import { AuthWrapper } from 'src/app/auth-wrapper';
import { BASE_URL } from '@/lib/config';

import { AppLayout } from '../components/layouts';

import { DashboardPage, InventoryPage } from './admin';
import { LoginPage } from './login';
import RootErrorPage from './root-error-page';

export const AppRouter = () => (
  <BrowserRouter basename={BASE_URL}>
    <Routes>
      <Route element={<AuthWrapper />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<AppLayout />} errorElement={<RootErrorPage />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
