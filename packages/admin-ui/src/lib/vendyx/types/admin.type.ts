import { type Admin } from '@vendyx/common';

export type AuthenticateAdminInput = Pick<Admin, 'username' | 'password'>;

export type AuthenticateAdminResponse = string;
