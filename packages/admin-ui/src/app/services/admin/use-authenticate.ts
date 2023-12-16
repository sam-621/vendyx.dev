import { useMutation } from '@tanstack/react-query';
import { type ErrorResult } from '@vendyx/common';

import {
  authenticateAdmin,
  type AuthenticateAdminInput,
  type AuthenticateAdminResponse
} from '@/lib/fetchers';

type TData = AuthenticateAdminResponse;
type TError = ErrorResult;
type TVariables = AuthenticateAdminInput;

export const useAuthenticate = () => {
  const { mutateAsync, isPending } = useMutation<TData, TError, TVariables>({
    mutationFn: authenticateAdmin,
    onError(error) {
      console.log({ error });
    },
    onSuccess(data) {
      console.log({ data });
    }
  });

  const authenticate = async (input: TVariables) => {
    try {
      const data = await mutateAsync(input);
      console.log({ data });
    } catch (error) {
      console.log({ error });
    }
  };

  return {
    authenticate,
    isLoading: isPending
  };
};
