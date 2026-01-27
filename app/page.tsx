import { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import StructuredData from '@shared/components/StructuredData';
import HomePage from '@features/home';

export const metadata: Metadata = generatePageMetadata({
	title: 'Accueil',
	description:
		'GAIA accompagne les organisations dans la structuration, l\'amélioration et le pilotage de systèmes de management adaptés à leurs réalités opérationnelles. Audit, conseil, accompagnement et formation en ISO, RSE, EPV et systèmes de management intégrés.',
	path: '/'
});

export default function Page() {
	return (
		<>
			<StructuredData type="Organization" />
			<StructuredData type="WebSite" />
			<HomePage />
		</>
	);
}
