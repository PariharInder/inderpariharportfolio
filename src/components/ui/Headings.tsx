import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React, { FC, forwardRef } from 'react'

export const headingVariants = cva(
  '',
  {
    variants: {
      variant: {
        headingTealPrimary:
          'font-extrabold bg-gradient-to-r from-teal-500 to-purple-500 text-transparent bg-clip-text',
        headingOrangeSecondary:
          'font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-transparent bg-clip-text',
      },
      size: {
        default: 'text-3xl md:text-5xl',
        sm: 'text-2xl md:text-3xl',
        lg: 'text-4xl md:text-6xl',
      },
    },
    defaultVariants: {
      variant: 'headingTealPrimary',
      size: 'default',
    },
  }
)

interface HeadingsProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof headingVariants> {
}

const Headings: FC<HeadingsProps> = forwardRef<HTMLButtonElement, HeadingsProps>(({className, children, variant, size, ...props}, ref) => {
  return <div {...props} className={cn(headingVariants({ size, className }))}>
    {children}
  </div>
})

Headings.displayName = 'Headings'

export default Headings