import { type SchemaTypeDefinition } from 'sanity'
import project from './schemas/project-schema'
import profile from './schemas/profile-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, profile],
}
