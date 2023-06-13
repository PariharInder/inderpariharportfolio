import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC, forwardRef } from 'react'
import { Loader2 } from 'lucide-react'

export const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:drop-shadow-lg disabled:opacity-50 disabled:pointer-events-none mx-2 md:mr-4',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-teal-500 to-purple-500 text-white hover:bg-teal-500',
          secondary:
          'bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 text-white hover:bg-yellow-300',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2',
        lg: 'md:h-11 md:px-8 h-10 py-2 px-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({className, children, variant, isLoading, size, ...props}, ref) => {
  return <button className={cn(buttonVariants({variant, size, className}))} ref={ref} disabled={isLoading} {...props}>
    {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin'/>: null}
    {children}
  </button>
})

Button.displayName = 'Button'

export default Button