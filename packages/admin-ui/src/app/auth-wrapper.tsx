import { type FC, type PropsWithChildren } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useValidateToken } from './services/admin';

export const AuthWrapper: FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  const { isAuthenticated, isLoading } = useValidateToken();

  if (isLoading) return null;

  // is in admin with invalid token, have to redirect to login
  if (!isAuthenticated && pathname !== '/login') return <Navigate to="/login" replace />;

  // is in login with valid token, have to redirect to admin
  if (isAuthenticated && pathname === '/login') return <Navigate to="/" replace />;

  // Everything is ok, render the children
  return children ?? <Outlet />;
};

type Props = PropsWithChildren;
