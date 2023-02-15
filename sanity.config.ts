import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';
import { getDefaultDocumentNode } from './structure';

const token = process.env.SANITY_API_TOKEN;

export default defineConfig({
  basePath: "/studio",
  name: 'default',
  title: 'Katherine L. Blog',
  projectId:  '95uf96hz',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token: token,
  useCdn: false,
  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode,
  }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
  },
},
  theme: myTheme,
});
