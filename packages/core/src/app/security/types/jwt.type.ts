import { ID } from '@vendyx/common';

export type Payload = {
  username: string;
  sub: ID;
  iat: number;
  exp: number;
};
