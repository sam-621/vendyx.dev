import { AuthenticateAdmin } from '../gql';
import { type AuthenticateAdminInput, type AuthenticateAdminResponse } from '../types';

import { gqlFetch } from './gql-fetch';

export const authenticateAdmin = async (input: AuthenticateAdminInput) => {
  const {
    data: { authenticateAdmin }
  } = await gqlFetch<AuthenticateAdminResponse, AuthenticateAdminInput>({
    query: AuthenticateAdmin,
    variables: { input }
  });

  return authenticateAdmin;
};
