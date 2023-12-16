import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';
import { type ErrorResult } from '@vendyx/common';

import { BASE_URL, COOKIE_TOKEN_NAME } from '@/lib/config';
import { cookies } from '@/lib/cookies';
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
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useMutation<TData, TError, TVariables>({
    mutationFn: authenticateAdmin
  });

  const authenticate = async (input: TVariables) => {
    try {
      const token = await mutateAsync(input);

      // TODO: Add expiry date
      cookies.set(COOKIE_TOKEN_NAME, token);

      navigate(`${BASE_URL}`);
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
