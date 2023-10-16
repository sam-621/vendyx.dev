import * as React from 'react'

import { cn } from '../utils'

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ className, label, errorMessage, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col gap-2 w-full')}>
        <label htmlFor={props.id}>{label}</label>
        <textarea
          className={cn(
            'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
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
Textarea.displayName = 'Textarea'

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  errorMessage?: string
}

export { Textarea }
