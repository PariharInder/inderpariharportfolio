import { FC } from 'react'
import Link from 'next/link'
import { buttonVariants } from './ui/Button'

interface CallToActionProps {
  
}

const CallToAction: FC<CallToActionProps> = ({}) => {
  return (
    <div className='mt-5'>
        <Link href={'/projects'} className={buttonVariants({variant: 'primary'})}>Check out my work.</Link>
        <Link href={'/about'} className={buttonVariants({variant: 'secondary'})}>Get to know me.</Link>
    </div>
  )
}

export default CallToAction