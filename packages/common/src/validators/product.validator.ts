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
    .transform(slug =>
      slug
        .toLowerCase()
        .replaceAll(' ', '-')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
    ),
  description: z.string().min(3).max(255).optional(),
  enabled: z.boolean()
} satisfies MakeAny<ValidateInput>);

const PartialValidator = z.object({
  name: z.string().min(3).max(255).optional(),
  slug: z
    .string()
    .min(3)
    .max(255)
    .transform(slug =>
      slug
        .toLowerCase()
        .replaceAll(' ', '-')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
    )
    .optional(),
  description: z.string().min(3).max(255).optional(),
  enabled: z.boolean().optional()
} satisfies MakeAny<ValidateInput>);

export const validateProduct = validatorFactory<ValidateInput>(Validator);
export const partialValidateProduct = validatorFactory<Partial<ValidateInput>>(PartialValidator);
