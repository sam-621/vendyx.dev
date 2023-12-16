import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BASE_URL } from '@/lib/config';

import { AppLayout } from '../components/layouts';

import { DashboardPage, InventoryPage } from './admin';
import { LoginPage } from './login';
import RootErrorPage from './root-error-page';

const router = createBrowserRouter(
  [
    { path: `/login`, element: <LoginPage /> },
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <RootErrorPage />,
      children: [
        { path: '/', element: <DashboardPage /> },
        { path: `/inventory`, element: <InventoryPage /> }
      ]
    }
  ],
  { basename: BASE_URL }
);

export const AppRouter = () => <RouterProvider router={router} />;
