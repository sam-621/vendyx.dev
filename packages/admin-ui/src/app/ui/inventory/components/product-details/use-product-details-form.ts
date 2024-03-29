import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useCreateAsset } from '@/core/assets';
import { FormMessages, type MakeAny } from '@/core/common';
import { useCreateProduct } from '@/core/inventory';
import { useForm } from '@/lib/form';
import { notification } from '@/lib/notifications';

export const useProductDetailsForm = () => {
  const { createAsset } = useCreateAsset();
  const { createProduct } = useCreateProduct();
  const methods = useForm<ProductDetailsFormInput>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (input: ProductDetailsFormInput) => {
    const formData = new FormData();

    input.assets?.forEach(file => {
      formData.append(`files`, file);
    });

    const assets = input.assets ? await createAsset(input.assets) : undefined;
    const productId = await createProduct({
      name: input.name,
      slug: input.slug,
      description: input.description,
      onlineOnly: input.onlineOnly,
      published: input.published,
      assetsIds: assets?.map(asset => asset.id) ?? []
    });

    notification.success(`Product ${input.name} created with id ${productId}`);
  };

  return {
    onSubmit: methods.handleSubmit(onSubmit),
    ...methods
  };
};

const schema = z.object({
  name: z.string().min(3, FormMessages.maxChars(3)),
  slug: z.string().min(3, FormMessages.maxChars(3)),
  description: z.string().optional(),
  assets: z.any(),
  price: z.preprocess(value => Number(value ?? 0), z.number().min(0).optional()),
  quantity: z.preprocess(value => Number(value ?? 0), z.number().min(0).optional()),
  sku: z.string().min(3, FormMessages.minChars(3)),
  published: z.boolean(),
  onlineOnly: z.boolean()
} satisfies MakeAny<ProductDetailsFormInput>);

export type ProductDetailsFormInput = {
  name: string;
  slug: string;
  description: string;
  assets: File[];
  price: number;
  sku: string;
  quantity: number;
  published: boolean;
  onlineOnly: boolean;
};
