'use client'
import { FC, useState } from 'react'
import { headingVariants } from './ui/Headings'
import { buttonVariants } from './ui/Button'
import Link from 'next/link'
import Modal2 from './ui/Modal2'
import ImageSlider from './ui/Carousel'

interface ProjectTileProps {
    data: any
}

const ProjectTile: FC<ProjectTileProps> = ({data}) => {
    const [modalOpen, setModalOpen] = useState(false)

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleLearnMore = () => {
    setModalOpen(true)
  }

  return <div key={data.slug} className='bg-stone-950 p-4 rounded-xl my-6'>
    <div className='flex items-center flex-col md:flex-row md:justify-between'>
    <span><span className={headingVariants({variant: 'headingOrangeSecondary', size: 'sm'})}>{data.name}</span></span>
    <div className='flex flex-wrap justify-between'>
        <Link href={data.url} target='_blank' className={buttonVariants({variant: 'primary', size: 'sm'})}>Check out live</Link>
        <div className='mx-2'></div>
        <Link href={data.github} className={buttonVariants({variant: 'secondary', size: 'sm'})}>Get source code</Link>
        <div className='mx-2'></div>
        <p onClick={handleLearnMore} className={buttonVariants({variant: 'ghost', size: 'sm'})}>Learn more</p>
    </div>
    </div>
    <ImageSlider images={data.images} />
    <div className='flex flex-wrap items-center justify-between'>
        {data.techStack.map((skill: string) => {
            return <p className={buttonVariants({variant: 'ghost'})} key={'skill'}>{skill}</p>
        })}
    </div>

    <Modal2 isOpen={modalOpen} onClose={closeModal} data={data}/>
  </div>
}

export default ProjectTile