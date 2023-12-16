import { AuthenticateAdminMutation, gqlFetch, type GqlMutation, type GqlQuery } from '@/lib/gql';
import { validateAdminTokenQuery } from '@/lib/gql/queries';

import { type AuthenticateAdminInput, type AuthenticateAdminResponse } from './admin.type';

export const authenticate = async (input: AuthenticateAdminInput) => {
  const {
    data: { authenticateAdmin }
  } = await gqlFetch<GqlMutation<AuthenticateAdminResponse>, AuthenticateAdminInput>({
    query: AuthenticateAdminMutation,
    variables: { input }
  });

  return authenticateAdmin;
};

export const validateToken = async () => {
  const {
    data: { validateAdminToken }
  } = await gqlFetch<GqlQuery<boolean>>({ query: validateAdminTokenQuery });
  console.log({ validateAdminToken });

  return validateAdminToken;
};

export const AdminKeys = {
  validate: ['validate']
};
