import { useState } from 'react';

import { COOKIE_TOKEN_NAME } from '@/lib/config';
import { cookies } from '@/lib/cookies';
import { AdminKeys } from '@/lib/fetchers';
import { queryClient } from '@/lib/query-client';

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    setIsLoading(true);

    cookies.remove(COOKIE_TOKEN_NAME);
    await queryClient.invalidateQueries({ queryKey: AdminKeys.validate });

    setIsLoading(false);
  };

  return {
    logout,
    isLoading
  };
};
