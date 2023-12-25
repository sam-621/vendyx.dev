import { ZodSchema } from 'zod';

export const validatorFactory =
  <Input extends unknown>(schema: ZodSchema<Input>) =>
  (input: Input) => {
    const validation = schema.safeParse(input);

    if (!validation.success) {
      return {
        data: undefined,
        errors: validation.error.flatten().fieldErrors
      };
    }

    return {
      errors: undefined,
      data: validation.data as Input
    };
  };
