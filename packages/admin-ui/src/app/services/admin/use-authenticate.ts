import { useMutation } from '@tanstack/react-query';
import { type ErrorResult } from '@vendyx/common';

import { ApiError } from '@/lib/errors';
import {
  authenticateAdmin,
  type AuthenticateAdminInput,
  type AuthenticateAdminResponse
} from '@/lib/fetchers';
import { notification } from '@/lib/notifications';

type TData = AuthenticateAdminResponse;
type TError = ErrorResult;
type TVariables = AuthenticateAdminInput;

export const useAuthenticate = () => {
  const { mutateAsync, isPending } = useMutation<TData, TError, TVariables>({
    mutationFn: authenticateAdmin
  });

  const authenticate = async (input: TVariables) => {
    try {
      const data = await mutateAsync(input);
      console.log({ data });
    } catch (error) {
      if (error instanceof ApiError) {
        notification.error(error.message);
        return;
      }

      notification.error('Something went wrong. Please try again.');
    }
  };

  return {
    authenticate,
    isLoading: isPending
  };
};
