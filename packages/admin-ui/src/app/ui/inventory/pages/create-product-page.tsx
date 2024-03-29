import { FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Button } from '@vendyx/theme';
import { MoveLeftIcon } from 'lucide-react';

import { PageLayout } from '@/components/layout';

import { ProductDetails } from '../components/product-details';
import { useProductDetailsForm } from '../components/product-details/use-product-details-form';

export const CreateProductPage = () => {
  const methods = useProductDetailsForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.onSubmit}>
        <PageLayout
          title="New product"
          subtitle="Create a product, add prices, content and more"
          actions={
            <>
              <Button variant="secondary">Cancel</Button>
              <Button type="submit">Save</Button>
            </>
          }
          icon={
            <Link to={'/inventory'}>
              <MoveLeftIcon />
            </Link>
          }
          className={{
            main: 'flex flex-col gap-8',
            container: 'w-[775px] mx-auto'
          }}
        >
          <ProductDetails />
        </PageLayout>
      </form>
    </FormProvider>
  );
};
