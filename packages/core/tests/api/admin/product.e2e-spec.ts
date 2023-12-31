import { ErrorCode, Product, ProductVariant } from '@vendyx/common';
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

    test('Should not create a product when duplicated slug is provided', async () => {
      const DUPLICATED_SLUG = 'slug_test';
      await prismaTest.product.create({ data: { name: 'test', slug: DUPLICATED_SLUG } });

      const { errors } = await testRequest<{ createProduct: Product }>(
        /* GraphQL */ `
          mutation {
            createProduct(
              input: {
                name: "Sillón"
                slug: "${DUPLICATED_SLUG}"
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

      expect(errors[0].code).toBe(ErrorCode.VALIDATION);
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

    test('Should not update a product when duplicated slug is provided', async () => {
      const DUPLICATED_SLUG = 'slug_test';

      const product = await prismaTest.product.create({ data: { name: 'test', slug: 'test' } });
      await prismaTest.product.create({ data: { name: 'test', slug: DUPLICATED_SLUG } });

      const { errors } = await testRequest<{ updateProduct: Product }>(
        /* GraphQL */ `
          mutation {
            updateProduct(
              id: "${product.id}",
              input: {
                slug: "${DUPLICATED_SLUG}"
              }
            ) {
              id
              enabled
            }
          }
        `,
        true
      );

      expect(errors[0].code).toBe(ErrorCode.VALIDATION);
    });
  });

  describe('deleteProduct', () => {
    test('Should delete a product', async () => {
      const {
        data: {
          createProduct: { id }
        }
      } = await testRequest<{ createProduct: Product }>(
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

      const { data } = await testRequest<{ removeProduct: Product }>(
        /* GraphQL */ `
          mutation {
            removeProduct(id: "${id}") 
          }
        `,
        true
      );

      expect(data.removeProduct).toBeTruthy();
    });
  });

  describe('createVariant', async () => {
    test('Should create a variant when valid input is provided', async () => {
      const product = await prismaTest.product.create({ data: { name: 'test', slug: 'test' } });

      const { data } = await testRequest<{ createVariant: Product }>(
        /* GraphQL */ `
          mutation {
            createVariant(
              id: "${product.id}",
              input: {
                sku: "sku 123",
                price: 100,
                costPerUnit: 70,
                stock: 12,
                enabled: true
              }
            ) {
              id
            }
          }
        `,
        true
      );

      expect(data.createVariant.id).toBeTruthy();
    });

    test('Should not create more than one default variant', async () => {
      const product = await prismaTest.product.create({ data: { name: 'test', slug: 'test' } });

      await testRequest<{ createVariant: Product }>(
        /* GraphQL */ `
          mutation {
            createVariant(
              id: "${product.id}",
              input: {
                sku: "sku 123",
                price: 100,
                costPerUnit: 70,
                stock: 12,
                enabled: true
              }
            ) {
              id
            }
          }
        `,
        true
      );

      const { errors } = await testRequest<{ createVariant: Product }>(
        /* GraphQL */ `
          mutation {
            createVariant(
              id: "${product.id}",
              input: {
                sku: "sku 123",
                price: 100,
                costPerUnit: 70,
                stock: 12,
                enabled: true
              }
            ) {
              id
            }
          }
        `,
        true
      );

      expect(errors[0].code).toBe(ErrorCode.VALIDATION);
    });

    test('Should create a variant with options', async () => {
      const product = await prismaTest.product.create({ data: { name: 'test', slug: 'test' } });
      const option = await prismaTest.option.create({
        data: {
          name: 'size',
          values: { createMany: { data: [{ value: 'S' }, { value: 'L' }, { value: 'M' }] } }
        },
        include: { values: true }
      });

      const optionValues = option.values.map(v => v.id);

      const { data } = await testRequest<{ createVariant: ProductVariant }>(
        /* GraphQL */ `
          mutation {
            createVariant(
              id: "${product.id}",
              input: {
                sku: "sku 123",
                price: 100,
                costPerUnit: 70,
                stock: 12,
                enabled: true
                optionValues: ["${optionValues[0]}", "${optionValues[1]}", "${optionValues[2]}"]
              }
            ) {
              id
            }
          }
        `,
        true
      );

      expect(data.createVariant.id).toBeTruthy();

      const results = await prismaTest.optionValueOnProductVariant.findMany();

      expect(results.length).toBe(3);
    });
  });
});
