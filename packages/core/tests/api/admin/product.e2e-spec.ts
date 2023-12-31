import { ErrorCode, Product } from '@vendyx/common';
import { testRequest } from 'tests/utils/graphql';
import { prismaTest } from 'tests/utils/libs';
import { describe, test } from 'vitest';

describe('Product resolver', () => {
  test('Should throw an unauthorized error when no token is provided', async () => {
    const result = await testRequest(/* GraphQL */ `
      query {
        products {
          count
          items {
            id
          }
        }
      }
    `);

    expect(result.errors[0].code).toBe(ErrorCode.UNAUTHORIZED);
  });

  describe('createProduct', () => {
    test('Should create a product when valid input is provided', async () => {
      const { data } = await testRequest<{ createProduct: Product }>(
        /* GraphQL */ `
          mutation {
            createProduct(
              input: {
                name: "Sillón"
                slug: "Sillón"
                description: "Descripción de la sillón"
                enabled: true
              }
            ) {
              id
            }
          }
        `,
        true
      );

      expect(data.createProduct.id).toBeTruthy();
    });

    test('Should not create a product when invalid input is provided', async () => {
      const { errors } = await testRequest<{ createProduct: Product }>(
        /* GraphQL */ `
          mutation {
            createProduct(
              input: {
                name: "s"
                slug: "Sillón"
                description: "Descripción de la sillón"
                enabled: true
              }
            ) {
              id
            }
          }
        `,
        true
      );

      expect(errors[0].code).toBe(ErrorCode.USER_INPUT);
    });
  });

  describe('updateProduct', () => {
    test('Should update a product when valid input is provided', async () => {
      const product = await prismaTest.product.create({ data: { name: 'test', slug: 'test' } });

      const { data } = await testRequest<{ updateProduct: Product }>(
        /* GraphQL */ `
          mutation {
            updateProduct(
              id: "${product.id}",
              input: {
                enabled: false
              }
            ) {
              id
              enabled
            }
          }
        `,
        true
      );

      expect(data.updateProduct.id).toBeTruthy();
      expect(product.enabled).toBe(true);
      expect(data.updateProduct.enabled).toBe(false);
    });

    test('Should not update a product when invalid input is provided', async () => {
      const product = await prismaTest.product.create({ data: { name: 'test', slug: 'test' } });

      const { errors } = await testRequest<{ updateProduct: Product }>(
        /* GraphQL */ `
          mutation {
            updateProduct(
              id: "${product.id}",
              input: {
                name: "S"
              }
            ) {
              id
              name
              enabled
            }
          }
        `,
        true
      );

      const productUpdated = await prismaTest.product.findUnique({ where: { id: product.id } });

      expect(errors[0].code).toBe(ErrorCode.USER_INPUT);
      expect(productUpdated.name).toBe(product.name);
    });
  });
});
