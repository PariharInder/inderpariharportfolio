import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { FC, forwardRef } from 'react'

export const inputVariants = cva(
  'px-2 bg-stone-950 rounded-xl',
  {
    variants: {
      variant: {
        text:
          'text-white'
      },
      size: {
        default: 'h-10 py-2 px-4'
      },
    },
    defaultVariants: {
      variant: 'text',
      size: 'default',
    },
  }
)

interface InputProps extends React.HTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({className, children, variant, size, ...props}, ref) => {
  return <div {...props} className={cn(inputVariants({ size, className }))}>
    {children}
  </div>
})

Input.displayName = 'Input'

export default Input