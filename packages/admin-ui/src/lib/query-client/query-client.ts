import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
});

export const invalidateQueries = async (queryKey: string[]) => {
  await queryClient.invalidateQueries({ queryKey });
};
