import { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import StructuredData from '@shared/components/StructuredData';
import Contact from '@features/contact';
import type { RequestType } from '@features/contact/types';

const VALID_OBJET = ['devis', 'projet', 'formation'] as const;

export const metadata: Metadata = generatePageMetadata({
	title: 'Contact - GAIA',
	description:
		'Demandez un devis, parlez-nous de votre projet ou inscrivez-vous à une formation. Audit, conseil et formation en systèmes de management.'
});

interface ContactPageProps {
	searchParams: Promise<{ objet?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
	const { objet } = await searchParams;
	const defaultRequestType: RequestType | undefined =
		objet && VALID_OBJET.includes(objet as (typeof VALID_OBJET)[number])
			? (objet as RequestType)
			: undefined;

	return (
		<>
			<StructuredData
				type="WebPage"
				data={{
					name: 'Contact - GAIA',
					description:
						'Demandez un devis, parlez-nous de votre projet ou inscrivez-vous à une formation.',
					url: '/contact'
				}}
			/>
			<Contact defaultRequestType={defaultRequestType} />
		</>
	);
}
