import { type SchemaTypeDefinition } from 'sanity'
import project from './schemas/project-schema'
import profile from './schemas/profile-schema'
import skills from './schemas/skills-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, profile, skills],
}
