import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
// Imports relatifs nécessaires car Sanity Studio (Vite) ne reconnaît pas les alias TypeScript
import home from '../../features/home/home.schema';
import offres from '../../features/offres/offres.schema';

export default defineConfig({
	name: 'default',
	title: 'GAIA Studio',
	projectId: 'qjikpaof',
	dataset: 'production',
	plugins: [deskTool()],
	schema: {
		types: [home, offres]
	}
});
