import { type ErrorResult } from '@vendyx/common';

import { useQuery } from '@/lib/query-client';

import { AdminKeys, validateToken } from './fetchers';

type QueryFnData = boolean | undefined;
type TError = ErrorResult;

export const useValidateToken = () => {
  const { data, error, isLoading } = useQuery<QueryFnData, TError>(
    AdminKeys.validate,
    validateToken
  );

  return {
    isAuthenticated: !error && data,
    isLoading
  };
};
