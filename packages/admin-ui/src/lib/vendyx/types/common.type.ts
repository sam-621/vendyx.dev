export type GqlQuery<R> = {
  __typename?: 'Query';
  validateAdminToken: R;
};

export type GqlMutation<R> = {
  __typename?: 'Mutation';
  authenticateAdmin: R;
};
