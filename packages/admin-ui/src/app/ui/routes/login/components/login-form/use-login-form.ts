import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useForm } from '@/lib/form';
import { useAuthenticate } from '@/services/admin';

export const useLoginForm = () => {
  const { authenticate } = useAuthenticate();
  const { register, handleSubmit, errors, isSubmitting } = useForm<FromInput>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (input: FromInput) => {
    await authenticate(input);
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors,
    isSubmitting
  };
};

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(1)
});

type FromInput = {
  username: string;
  password: string;
};
