import { FC } from 'react'
import { headingVariants } from './ui/Headings'

interface ProjectsSectionProps {

}

const ProjectsSection: FC<ProjectsSectionProps> = ({ }) => {
  return <div className='flex flex-col items-center md:items-start'>
    <div className='flex flex-col items-center md:items-start'>
      <span className='py-7 md:py-10'><span className={headingVariants({ variant: 'headingTealPrimary', size: 'default' })}>
       Projects
      </span></span>
      <div className='font-thin'>
        Check out some of my work:
      </div>
    </div>
  </div>
}

export default ProjectsSection