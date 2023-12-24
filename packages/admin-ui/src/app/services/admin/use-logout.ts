import { useState } from 'react';

import { COOKIE_TOKEN_NAME } from '@/lib/config';
import { cookies } from '@/lib/cookies';
import { invalidateQueries } from '@/lib/query-client';

import { AdminKeys } from './fetchers';

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    setIsLoading(true);

    cookies.remove(COOKIE_TOKEN_NAME);
    await invalidateQueries(AdminKeys.validate);

    setIsLoading(false);
  };

  return {
    logout,
    isLoading
  };
};
