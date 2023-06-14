import { FC } from 'react'
import Link from 'next/link'
import { buttonVariants } from './ui/Button'

interface CallToActionProps {
  
}

const CallToAction: FC<CallToActionProps> = ({}) => {
  return (
    <div className='mt-5 flex justify-center items-center md:justify-start'>
        <Link href={'/projects'} className={buttonVariants({variant: 'primary', size: 'lg'})}>Check out my work.</Link>
        <div className='mx-2'></div>
        <Link href={'/about'} className={buttonVariants({variant: 'secondary', size: 'lg'})}>Get to know me.</Link>
    </div>
  )
}

export default CallToAction