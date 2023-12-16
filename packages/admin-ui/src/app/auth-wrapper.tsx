import { type FC, type PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import { COOKIE_TOKEN_NAME } from '@/lib/config';
import { cookies } from '@/lib/cookies';

export const AuthWrapper: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const token = cookies.get(COOKIE_TOKEN_NAME);

  if (!token) {
    navigate('/login');
    return;
  }

  return children;
};

type Props = PropsWithChildren;
