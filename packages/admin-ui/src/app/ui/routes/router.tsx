import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './login';
import { DashboardPage } from './admin';

const router = createBrowserRouter([
  { path: '/login', Component: LoginPage },
  { path: '/', Component: DashboardPage }
]);

export const AppRouter = () => <RouterProvider router={router} />;
