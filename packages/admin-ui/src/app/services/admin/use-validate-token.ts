import { useQuery } from '@tanstack/react-query';
import { type ErrorResult } from '@vendyx/common';

import { AdminKeys, validateToken } from '@/lib/fetchers';

type QueryFnData = boolean | undefined;
type TError = ErrorResult;

export const useValidateToken = () => {
  const { data, error, isLoading } = useQuery<QueryFnData, TError>({
    queryKey: AdminKeys.validate,
    queryFn: validateToken
  });

  return {
    isAuthenticated: !error && data,
    isLoading
  };
};
