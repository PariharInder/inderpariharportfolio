import { FC, Key } from 'react'
import { headingVariants } from './ui/Headings'
import { getProfile } from '@/lib/sanity-utils'
import Link from 'next/link'
import { buttonVariants } from './ui/Button'

interface AboutProps {
  
}

const About: FC<AboutProps> = async ({}) => {
  const profile = await getProfile()

  return <div className='flex flex-col'>
    <span className='py-7 md:py-10'><span className={headingVariants({ variant: 'headingTealPrimary', size: 'default' })}>
        A little about me
      </span></span>
      <div className='hidden md:flex justify-between'>
        <div className='w-4/6 flex flex-col h-auto'> 
      {profile.about.map((block: { _key: Key | null | undefined; children: any[] }) => (
      <p key={block._key}>
        {block.children.map((child) => (
          <span key={child._key}>{child.text}</span>
        ))}
      </p>
    ))}
        </div>
        <img src={profile.profilePhoto} alt="inder-parihar profile photo" className='w-80 h-80 rounded-full object-cover'/>
      </div>

      <div className='flex md:hidden flex-col justify-center items-center'>
      <img src={profile.profilePhoto} alt="inder-parihar profile photo" className='w-60 h-60 rounded-full object-cover'/>
        <div className='w-5/6 pt-4 flex flex-col h-auto'> 
      {profile.about.map((block: { _key: Key | null | undefined; children: any[] }) => (
      <p key={block._key}>
        {block.children.map((child) => (
          <span key={child._key}>{child.text}</span>
        ))}
      </p>
    ))}
        </div>
      </div>

      <div className='my-5 flex flex-col md:flex-row justify-start items-center'>
        <Link href={'/projects'} className={buttonVariants({variant: 'primary', size: 'lg'})}>Learn about my Skills</Link>
        <Link href={'/contact'} className={buttonVariants({variant: 'secondary', size: 'lg'})}>Get in touch</Link>
    </div>
  </div>
}

export default About