import { FC } from 'react'
import { Github } from 'lucide-react'
import Link from 'next/link'

interface GitHubButtonProps {
  
}

const GitHubButton: FC<GitHubButtonProps> = ({}) => {
  return (
    <Link href={'https://github.com/PariharInder/'}>
        <div className='border-white border-solid rounded-full border-2 p-2 m-2 text-white'>
        <Github className="text-20 md:text-32"/>
        </div>
    </Link>
  )
}

export default GitHubButton