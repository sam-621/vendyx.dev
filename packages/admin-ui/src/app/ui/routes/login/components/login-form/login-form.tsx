import { Button, cn, Input } from '@vendyx/theme';

import { useLoginForm } from './use-login-form';

export const LoginForm = () => {
  const { onSubmit, register, errors } = useLoginForm();

  return (
    <div className={cn('grid gap-6')}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-1">
            <Input
              {...register('username')}
              id="username"
              label="Username"
              placeholder="sam_621"
              type="text"
              autoCapitalize="none"
              errorMessage={errors.username?.message}
            />
          </div>
          <div className="grid gap-1">
            <Input
              {...register('password')}
              id="password"
              label="Password"
              placeholder="******"
              type="password"
              autoCapitalize="none"
              errorMessage={errors.password?.message}
            />
          </div>
          <Button>Login</Button>
          {/* <div className="flex h-5 items-center gap-2">
            <AlertCircleIcon className="h-5 w-5 text-red-500" />
            <p aria-live="polite" className="text-sm text-red-500">
              No se pudo authentificar
            </p>
          </div> */}
        </div>
      </form>
    </div>
  );
};
