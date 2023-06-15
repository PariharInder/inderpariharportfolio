'use client'
import { FC, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal } from 'react'
import { headingVariants } from './ui/Headings'
import { getSkills } from '@/lib/sanity-utils'

interface SkillsProps {

}

const Skills: FC<SkillsProps> = async ({ }) => {
  const skills = await getSkills()
    return <div className='my-2'>
        <div>
            <span className='py-7 md:py-10'><span className={headingVariants({ variant: 'headingOrangeSecondary', size: 'default' })}>
                Skills
            </span></span>
        </div>
        <div className='py-10'>
        <table className="text-xl font-thin text-left border border-white">
  <tr>
    <th className="border-b border-r border-white p-2">Category</th>
    <th className="border-b border-white  p-2">Skills</th>
  </tr>
  {skills.map((skill: { name: string | number | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; skills: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined }) => {
    return (
      <tr key={1}><td className="border-b border-r border-white p-2">{skill.name}</td>
      <td className="border-b border-white  p-2">{skill.skills}</td>
      </tr>
    )
  })}
</table>

        </div>
    </div>
}

export default Skills