import { z } from 'zod';
import { MakeAny } from '../utils';
import { Product } from '../models';
import { validatorFactory } from './validator.factory';

type ValidateInput = Pick<Product, 'name' | 'slug' | 'description' | 'enabled'>;

const Validator = z.object({
  name: z.string().min(3).max(255),
  slug: z
    .string()
    .min(3)
    .max(255)
    .transform(slug => slug.toLowerCase().replaceAll(' ', '-')),
  description: z.string().min(3).max(255),
  enabled: z.boolean()
} satisfies MakeAny<ValidateInput>);

export const validateProduct = validatorFactory<ValidateInput>(Validator);
