

import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schema'
import { apiVersion } from './lib/sanity.api'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { PreDrop } from './components/actions'


export default defineConfig({
  name: 'thecrib',
  title: 'The Crib | Collections',
  basePath: '/studio',
  projectId: '7cz92znn',
  dataset: 'production',
  apiVersion,

  plugins: [
    deskTool(),
    visionTool()],

    document: {
      actions: [PreDrop],
    },
  schema: {
    types: schemaTypes,
  },
})


