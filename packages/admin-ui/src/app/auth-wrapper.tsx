import { type FC, type PropsWithChildren } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useValidateToken } from './services/admin';

export const AuthWrapper: FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  const { data, isLoading } = useValidateToken();

  if (isLoading) return null;

  // is in admin with invalid token, have to redirect to login
  if (!data && pathname !== '/login') return <Navigate to="/login" replace />;

  // is in login with valid token, have to redirect to admin
  if (data && pathname === '/login') return <Navigate to="/" replace />;

  // !data && pathname === '/login' || data && pathname !== '/login'
  return children ?? <Outlet />;
};

type Props = PropsWithChildren;
