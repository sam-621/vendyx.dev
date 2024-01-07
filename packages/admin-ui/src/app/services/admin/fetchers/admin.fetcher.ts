import { vendyxFetch } from '@/lib/vendyx';
import { AuthenticateAdminMutation } from '@/lib/vendyx/mutations';
import { validateAdminTokenQuery } from '@/lib/vendyx/queries';
import {
  type AuthenticateAdminInput,
  type AuthenticateAdminMutationResult,
  type GqlMutation,
  type GqlQuery
} from '@/lib/vendyx/types';

export const authenticate = async (input: AuthenticateAdminInput) => {
  const {
    data: { authenticateAdmin }
  } = await vendyxFetch<GqlMutation<AuthenticateAdminMutationResult>, AuthenticateAdminInput>({
    query: AuthenticateAdminMutation,
    variables: { input }
  });

  return authenticateAdmin;
};

export const validateToken = async () => {
  const {
    data: { validateAdminToken }
  } = await vendyxFetch<GqlQuery<boolean>>({ query: validateAdminTokenQuery });

  return validateAdminToken;
};
