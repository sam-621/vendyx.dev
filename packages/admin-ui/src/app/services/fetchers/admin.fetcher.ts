import { AuthenticateAdmin, gqlFetch } from '@/lib/gql';

import { type AuthenticateAdminInput, type AuthenticateAdminResponse } from '../types';

export const authenticateAdmin = async (input: AuthenticateAdminInput) => {
  const {
    data: { authenticateAdmin }
  } = await gqlFetch<AuthenticateAdminResponse, AuthenticateAdminInput>({
    query: AuthenticateAdmin,
    variables: { input }
  });

  return authenticateAdmin;
};
