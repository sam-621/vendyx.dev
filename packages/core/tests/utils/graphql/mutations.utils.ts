import { testRequest } from './test-request';

export const authenticate = async () => {
  const { data } = await testRequest<{ authenticateAdmin: string }>(/* GraphQL */ `
    mutation {
      authenticateAdmin(input: { username: "Admin", password: "Admin" })
    }
  `);

  return data.authenticateAdmin;
};
