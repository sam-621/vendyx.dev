export type GraphQLApiResponse<T> =
  | {
      data: T;
      errors: undefined;
    }
  | {
      data: null;
      errors: { message: string; code: string }[];
    };
