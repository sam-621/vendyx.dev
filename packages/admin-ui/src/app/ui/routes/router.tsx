import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootErrorPage from './root-error-page';
import { LoginPage } from './login';
import { AppLayout } from '../components/layouts';
import { DashboardPage, InventoryPage } from './admin';
import { BASE_URL } from '@/lib/config';

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <AppLayout />,
    errorElement: <RootErrorPage />,
    children: [
      { path: BASE_URL, element: <DashboardPage /> },
      { path: `${BASE_URL}/inventory`, element: <InventoryPage /> }
    ]
  },
  { path: `${BASE_URL}/login`, element: <LoginPage /> }
]);

export const AppRouter = () => <RouterProvider router={router} />;
