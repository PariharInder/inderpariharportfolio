import { FC, Key } from 'react'
import { headingVariants } from './ui/Headings'
import { getProfile } from '@/lib/sanity-utils'
import Link from 'next/link'
import { buttonVariants } from './ui/Button'
import Skills from './Skills'

interface AboutProps {

}

const About: FC<AboutProps> = async ({ }) => {
  const profile = await getProfile()

  return <div className='flex flex-col items-center md:items-start'>
    <span className='py-7 md:py-10'><span className={headingVariants({ variant: 'headingTealPrimary', size: 'default' })}>
      A little about me
    </span></span>
    <div className='hidden md:flex justify-between'>
      <div className='w-4/6 flex flex-col h-auto font-thin'>
        {profile.about.map((block: { _key: Key | null | undefined; children: any[] }) => (
          <p key={block._key}>
            {block.children.map((child) => (
              <span key={child._key}>{child.text}</span>
            ))}
          </p>
        ))}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={profile.profilePhoto} alt="inder-parihar profile photo" className='w-80 h-80 rounded-full object-cover' />
    </div>

    <div className='flex md:hidden flex-col justify-center items-center'>
      <img src={profile.profilePhoto} alt="inder-parihar profile photo" className='w-60 h-60 rounded-full object-cover' />
      <div className='pt-4 flex flex-col h-auto font-thin'>
        {profile.about.map((block: { _key: Key | null | undefined; children: any[] }) => (
          <p key={block._key}>
            {block.children.map((child) => (
              <span key={child._key}>{child.text}</span>
            ))}
          </p>
        ))}
      </div>
    </div>

    <div className='my-5'>
      <Link href={'/contact'} className={buttonVariants({ variant: 'primary', size: 'lg' })}>Get in touch</Link>
    </div>
    <Skills />
  </div>
}

export default About