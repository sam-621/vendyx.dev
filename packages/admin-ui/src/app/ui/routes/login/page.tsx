import { useTheme } from '@vendyx/theme';

import { Logo } from '../../components/items';

import { LoginForm } from './components';

export const LoginPage = () => {
  const { theme } = useTheme();
  console.log({ theme });

  return (
    <div className="h-screen grid grid-cols-2 items-center">
      <div className="border-border h-full p-10 dark:border-r flex flex-col justify-between">
        <Logo />
        <div>
          <blockquote className="flex flex-col gap-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and helped me deliver
              stunning designs to my clients faster than ever before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Log in</h1>
            <p className="text-sm text-muted-foreground">Enter your username and password</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
