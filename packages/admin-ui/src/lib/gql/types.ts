export type GqlQuery<R> = {
  __typename?: 'Query';
  s: R;
};

export type GqlMutation<R> = {
  __typename?: 'Mutation';
  authenticateAdmin: R;
};
