import * as React from 'react'

import { cn } from '../utils'

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, type, label, errorMessage, ...props }, ref) => {
    return (
      <div className={cn('w-full')}>
        <label htmlFor={props.id}>{label}</label>
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        <span>{errorMessage}</span>
      </div>
    )
  }
)
Input.displayName = 'Input'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  errorMessage?: string
}

export { Input }
