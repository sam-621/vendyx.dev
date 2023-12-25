import { z } from 'zod';
import { MakeAny } from '../utils';
import { ProductVariant } from '../models';
import { validatorFactory } from './validator.factory';

type ValidateInput = Pick<
  ProductVariant,
  'price' | 'sku' | 'stock' | 'weight' | 'comparisonPrice' | 'costPerUnit' | 'enabled'
>;

const Validator = z.object({
  price: z.number().min(0),
  sku: z.string().min(3).max(255),
  stock: z.number().min(0),
  weight: z.number().min(0).optional(),
  comparisonPrice: z.number().min(0).optional(),
  costPerUnit: z.number().min(0),
  enabled: z.boolean()
} satisfies MakeAny<ValidateInput>);

const PartialValidator = z.object({
  price: z.number().min(0),
  sku: z.string().min(3).max(255),
  stock: z.number().min(0),
  weight: z.number().min(0).optional(),
  comparisonPrice: z.number().min(0).optional(),
  costPerUnit: z.number().min(0),
  enabled: z.boolean()
} satisfies MakeAny<ValidateInput>);

export const validateProductVariant = validatorFactory<ValidateInput>(Validator);
export const partialValidateProductVariant = validatorFactory<ValidateInput>(PartialValidator);
