import { AuthenticateAdminMutation, gqlFetch, type GqlMutation } from '@/lib/gql';

import { type AuthenticateAdminInput, type AuthenticateAdminResponse } from './admin.type';

export const authenticateAdmin = async (
  input: AuthenticateAdminInput
): Promise<AuthenticateAdminResponse> => {
  const {
    data: { authenticateAdmin }
  } = await gqlFetch<GqlMutation<AuthenticateAdminResponse>, AuthenticateAdminInput>({
    query: AuthenticateAdminMutation,
    variables: { input }
  });

  return authenticateAdmin;
};
