import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export const getProfile = () => {
  return client.fetch(groq`
    *[_type == "profile"]{
      _id,
      name,
      "profilePhoto": profilePhoto.asset->url,
      github,
      linkedin,
      about
    }[0]
  `)
}

export const getSkills = () => {
  return client.fetch(groq`
    *[_type == "skills"]{
      _id,
      name,
      skills
    }
  `)
}

export const getProjects = () => {
  return client.fetch(groq`
  *[_type == 'project'] {
    _id,
    name,
    slug,
    "images": images[] {
      "url": asset->url,
      alt
    },
    url,
    techStack,
    github,
    content
  }
  `)
}