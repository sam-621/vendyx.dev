import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DashboardPage } from './admin';
import RootErrorPage from './root-error-page';
import { LoginPage } from './login';

const router = createBrowserRouter([
  { path: '/', element: <DashboardPage />, errorElement: <RootErrorPage /> },
  { path: '/login', element: <LoginPage /> }
]);

export const AppRouter = () => <RouterProvider router={router} />;
