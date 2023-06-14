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