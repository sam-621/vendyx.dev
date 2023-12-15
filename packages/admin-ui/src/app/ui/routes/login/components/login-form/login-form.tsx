import { Button, cn, Input } from '@vendyx/theme';

export const LoginForm = () => {
  return (
    <div className={cn('grid gap-6')}>
      <form>
        <div className="grid gap-6">
          <div className="grid gap-1">
            <Input
              id="username"
              label="Username"
              name="username"
              placeholder="sam_621"
              type="text"
              autoCapitalize="none"
            />
          </div>
          <div className="grid gap-1">
            <Input
              id="password"
              label="Password"
              name="password"
              placeholder="******"
              type="password"
              autoCapitalize="none"
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
