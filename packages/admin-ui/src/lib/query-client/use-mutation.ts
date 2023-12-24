import { useMutation as RQUseMutation } from '@tanstack/react-query';

export const useMutation = <TData = unknown, TError = Error, TVariables = unknown>(
  fn: (input: TVariables) => Promise<TData>
) => {
  const { data, error, isPending, mutateAsync } = RQUseMutation<TData, TError, TVariables>({
    mutationFn: fn
  });

  return {
    data,
    error,
    isPending,
    mutateAsync
  };
};
