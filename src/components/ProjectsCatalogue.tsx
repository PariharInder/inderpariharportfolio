import { getProjects } from '@/lib/sanity-utils'
import { FC } from 'react'
import ProjectTile from './ProjectTile'

interface ProjectsCatalogueProps {
  
}

const ProjectsCatalogue: FC<ProjectsCatalogueProps> = async ({}) => {

    const projects = await getProjects()
  return (
    <div>
        {projects.map((project:any) => {
            return <ProjectTile data={project}/>
        })}
    </div>
  )
}

export default ProjectsCatalogue