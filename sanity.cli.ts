import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '95uf96hz',
    dataset: 'production',
  },
  project: {
    basePath: '/'
  },
})
