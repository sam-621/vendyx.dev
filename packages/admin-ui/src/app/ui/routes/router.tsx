import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootErrorPage from './root-error-page';
import { LoginPage } from './login';
import { AppLayout } from '../components/layouts';
import { DashboardPage, InventoryPage } from './admin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <RootErrorPage />,
    children: [
      { path: '/', element: <DashboardPage /> },
      { path: '/inventory', element: <InventoryPage /> }
    ]
  },
  { path: '/login', element: <LoginPage /> }
]);

export const AppRouter = () => <RouterProvider router={router} />;
