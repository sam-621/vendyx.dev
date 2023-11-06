import * as React from 'react';

import { cn } from '../utils';

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, type, label, errorMessage, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col gap-2 w-full')}>
        {label !== undefined && <label htmlFor={props.id}>{label}</label>}
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 shadow-sm text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
            errorMessage !== undefined && errorMessage.length > 0 ? 'border-destructive' : '',
            className
          )}
          ref={ref}
          {...props}
        />
        {errorMessage !== undefined && (
          <span className="text-sm font-medium text-destructive">{errorMessage}</span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errorMessage?: string;
};

export { Input };
