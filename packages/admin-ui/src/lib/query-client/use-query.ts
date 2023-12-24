import { useQuery as RQUseQuery } from '@tanstack/react-query';

export const useQuery = <QueryFnData = unknown, TError = Error>(
  key: string[],
  fn: () => Promise<QueryFnData>
) => {
  const { data, isError, isLoading, error, refetch, status } = RQUseQuery<QueryFnData, TError>({
    queryKey: key,
    queryFn: fn
  });

  return {
    data,
    isError,
    isLoading,
    error,
    refetch,
    status
  };
};
