import { FC } from 'react'
import GitHubButton from './ui/GitHubButton'
import LinkedInButton from './ui/LinkedInButton'

interface SocialMediaButtonsProps {
  
}

const SocialMediaButtons: FC<SocialMediaButtonsProps> = ({}) => {
  return (
    <div className='fixed bottom-2 md:bottom-5 right-4 md:right-6'>
        <GitHubButton />
        <LinkedInButton />
    </div>
  )
}

export default SocialMediaButtons