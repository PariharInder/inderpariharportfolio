import { FC } from 'react'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'

interface LinkedInButtonProps {
  
}

const LinkedInButton: FC<LinkedInButtonProps> = ({}) => {
  return (
    <Link href={'https://www.linkedin.com/in/inderparihar/'}>
        <div className='border-white border-solid rounded-full border-2 p-2 m-2 text-white'>
        <Linkedin className="text-20 md:text-32"/>
        </div>
    </Link>
  )
}

export default LinkedInButton