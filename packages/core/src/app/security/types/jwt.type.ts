import { ID } from '@vendyx/common';

export type Payload = {
  username: string;
  /**
   * User ID
   */
  sub: ID;
  iat: number;
  exp: number;
};
