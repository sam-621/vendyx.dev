import {} from '@vendyx/common';

import { type GqlMutation } from '@/lib/gql';

export type AuthenticateAdminInput = {
  username: string;
  password: string;
};

export type AuthenticateAdminResponse = GqlMutation<string>;
