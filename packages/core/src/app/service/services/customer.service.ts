import { clean } from '@ebloc/common';
import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { ErrorResult, validateEmail } from '../utils';

import {
  CreateCustomerInput,
  CustomerErrorCode,
  ListInput,
  UpdateCustomerInput,
  UpdateCustomerPasswordInput
} from '@/app/api/common';
import { CustomerEntity, ID } from '@/app/persistance';
import { SecurityService } from '@/app/security';
import { CustomerJwtPayload } from '@/app/security/strategies/jwt/jwt.types';

@Injectable()
export class CustomerService {
  constructor(
    @InjectDataSource() private db: DataSource,
    private readonly securityService: SecurityService
  ) {}

  /**
   * Find all customers
   */
  find(input: ListInput) {
    return this.db.getRepository(CustomerEntity).find({
      ...clean(input)
    });
  }

  /**
   * Find a customer by id or email, if none is provided, throw an error. By default, only enabled customers are returned
   */
  async findUnique({ id, email, onlyEnabled = true }: FindUniqueInput) {
    if (email) {
      return await this.db
        .getRepository(CustomerEntity)
        .findOne({ where: { email, enabled: onlyEnabled || undefined } });
    }

    if (id) {
      return await this.db
        .getRepository(CustomerEntity)
        .findOne({ where: { id, enabled: onlyEnabled || undefined } });
    }

    throw new Error('Should provide either id or email to find a customer');
  }

  /**
   * Find a customer by access token
   */
  async findByAccessToken(accessToken: string) {
    const { sub } = await this.verifyAccessToken(accessToken);

    if (!sub) {
      return new ErrorResult(CustomerErrorCode.INVALID_ACCESS_TOKEN, 'Invalid access token');
    }

    return await this.findUnique({ id: sub });
  }

  /**
   * Create a new customer
   */
  async create(input: CreateCustomerInput): CustomerMutationResult {
    if (!validateEmail(input.email)) {
      return new ErrorResult(CustomerErrorCode.INVALID_EMAIL, 'Invalid email');
    }

    const customerExists = await this.findUnique({ email: input.email, onlyEnabled: false });
    console.log({
      customerExists
    });

    if (customerExists) {
      return new ErrorResult(
        CustomerErrorCode.CUSTOMER_ALREADY_EXISTS,
        'Customer with that email already exists'
      );
    }

    const hashedPassword = await this.securityService.hash(input.password);

    return this.db.getRepository(CustomerEntity).save({
      ...clean(input),
      password: hashedPassword
    });
  }

  /**
   * Update a customer by the given id
   */
  async updateByAccessToken(
    accessToken: string,
    input: UpdateCustomerInput
  ): CustomerMutationResult {
    const { sub } = await this.verifyAccessToken(accessToken);

    if (!sub) {
      return new ErrorResult(CustomerErrorCode.INVALID_ACCESS_TOKEN, 'Invalid access token');
    }

    return await this.update(sub, input, true);
  }

  /**
   * Update a customer by the given id
   */
  async updateById(id: ID, input: UpdateCustomerInput): CustomerMutationResult {
    return this.update(id, input, false);
  }

  /**
   * Update a customer by the given id
   *
   * @param onlyEnabled - if true, only enabled customers are updated, if false, all customers are updated
   */
  private async update(
    id: ID,
    input: UpdateCustomerInput,
    onlyEnabled: boolean
  ): CustomerMutationResult {
    const customerToUpdate = await this.findUnique({ id, onlyEnabled: onlyEnabled });

    if (!customerToUpdate) {
      return new ErrorResult(CustomerErrorCode.CUSTOMER_NOT_FOUND, 'Customer not found');
    }

    return this.db.getRepository(CustomerEntity).save({
      ...customerToUpdate,
      ...clean(input)
    });
  }

  /**
   * Update customer's password
   *
   * @description
   * 1. Verify the access token
   * 2. Check if the customer exists
   * 3. Check if the new password is the same as the old password
   * 4. Hash the new password
   * 5. Update the customer's password
   */
  async updatePassword(token: string, input: UpdateCustomerPasswordInput): CustomerMutationResult {
    const { sub } = await this.verifyAccessToken(token);

    if (!sub) {
      return new ErrorResult(CustomerErrorCode.INVALID_ACCESS_TOKEN, 'Invalid access token');
    }

    const customerToUpdate = await this.findUnique({ id: sub });

    if (!customerToUpdate) {
      return new ErrorResult(CustomerErrorCode.CUSTOMER_NOT_FOUND, 'Customer not found');
    }

    if (input.password !== input.newPassword) {
      return new ErrorResult(CustomerErrorCode.PASSWORDS_DO_NOT_MATCH, 'Passwords do not match');
    }

    const hashedNewPassword = await this.securityService.hash(input.newPassword);

    return this.db.getRepository(CustomerEntity).save({
      ...customerToUpdate,
      password: hashedNewPassword
    });
  }

  /**
   * Generate a customer access token
   *
   * @description
   * 1. Find the customer by email
   * 2. Compare the password
   * 3. Generate a new access token
   */
  async generateCustomerAccessToken(
    email: string,
    password: string
  ): CustomerMutationResult<string> {
    const customer = await this.findUnique({ email });

    if (!customer) {
      return new ErrorResult(CustomerErrorCode.INVALID_CREDENTIALS, 'Invalid email or password');
    }

    const passwordsMatch = await this.securityService.compare(password, customer.password);

    if (!passwordsMatch) {
      return new ErrorResult(CustomerErrorCode.INVALID_CREDENTIALS, 'Invalid email or password');
    }

    const { accessToken } = await this.securityService.generateToken<CustomerJwtPayloadInput>({
      email: customer.email,
      sub: customer.id
    });

    return accessToken;
  }

  private async verifyAccessToken(accessToken: string) {
    return await this.securityService.decodeAccessToken<CustomerJwtPayload>(accessToken);
  }
}

type CustomerMutationResult<R = CustomerEntity> = Promise<ErrorResult<CustomerErrorCode> | R>;

type CustomerJwtPayloadInput = Pick<CustomerJwtPayload, 'sub' | 'email'>;
type FindUniqueInput = { id?: ID; email?: string; onlyEnabled?: boolean };
