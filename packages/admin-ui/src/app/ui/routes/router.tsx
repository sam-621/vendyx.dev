import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SignInPage } from './sign-in/page';

const router = createBrowserRouter([{ path: '/sign-in', Component: SignInPage }]);

export const AppRouter = () => <RouterProvider router={router} />;
