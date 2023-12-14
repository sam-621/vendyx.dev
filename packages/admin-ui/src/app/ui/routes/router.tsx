import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BASE_URL } from '@/lib/config';

import { AppLayout } from '../components/layouts';

import { DashboardPage, InventoryPage } from './admin';
import { LoginPage } from './login';
import RootErrorPage from './root-error-page';

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
