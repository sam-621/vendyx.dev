import { useMutation } from '@tanstack/react-query';
import { type ErrorResult } from '@vendyx/common';

import { COOKIE_TOKEN_NAME } from '@/lib/config';
import { cookies } from '@/lib/cookies';
import { ApiError } from '@/lib/errors';
import {
  AdminKeys,
  authenticate as authenticateFetcher,
  type AuthenticateAdminInput,
  type AuthenticateAdminResponse
} from '@/lib/fetchers';
import { notification } from '@/lib/notifications';
import { queryClient } from '@/lib/query-client';

type TData = AuthenticateAdminResponse;
type TError = ErrorResult;
type TVariables = AuthenticateAdminInput;

export const useAuthenticate = () => {
  const { mutateAsync, isPending } = useMutation<TData, TError, TVariables>({
    mutationFn: authenticateFetcher
  });

  const authenticate = async (input: TVariables) => {
    try {
      const token = await mutateAsync(input);

      // TODO: Add expiry date
      cookies.set(COOKIE_TOKEN_NAME, token);

      // this will re-render auth wrapper and now that are a valid token, it will redirect to /
      await queryClient.invalidateQueries({ queryKey: AdminKeys.validate });
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
