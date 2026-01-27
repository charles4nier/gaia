import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import home from '../../features/home/home.schema';

export default defineConfig({
	name: 'default',
	title: 'GAIA Studio',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	plugins: [deskTool()],
	schema: {
		types: [home]
	}
});
