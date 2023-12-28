import { Logo } from '../../components/items';

import { LoginForm } from './components';

export const LoginPage = () => {
  return (
    <div className="h-screen grid grid-cols-2 items-center">
      <div className="border-border h-full p-10 dark:border-r flex flex-col justify-between">
        <Logo />
        <div>
          <blockquote className="flex flex-col gap-2">
            <p className="text-lg">
              A functional and scalable minimal e-commerce admin that can be adjusted to any
              user&apos;s requirement. Providing a full featured solution but focused on simplicity
              at the same time
            </p>
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
