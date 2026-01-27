// Configuration SEO centralisée pour GAIA
export const siteConfig = {
	name: 'GAIA',
	description:
		'GAIA accompagne les organisations dans la structuration, l\'amélioration et le pilotage de systèmes de management adaptés à leurs réalités opérationnelles. Audit, conseil, accompagnement et formation en ISO, RSE, EPV et systèmes de management intégrés.',
	url: process.env.NEXT_PUBLIC_SITE_URL || 'https://gaia.fr',
	ogImage: '/og-image.jpg',
	twitter: {
		handle: '@gaia',
		site: '@gaia'
	},
	keywords: [
		'GAIA',
		'audit',
		'conseil',
		'formation',
		'ISO 9001',
		'ISO 14001',
		'ISO 45001',
		'ISO 20121',
		'RSE',
		'EPV',
		'systèmes de management',
		'certification',
		'labellisation',
		'QSE',
		'management intégré',
		'audit interne',
		'audit à blanc',
		'diagnostic maturité',
		'formation professionnelle',
		'accompagnement organisation'
	]
};

// Métadonnées par défaut
export const defaultMetadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: [{ name: siteConfig.name }],
	creator: siteConfig.name,
	publisher: siteConfig.name,
	formatDetection: {
		email: false,
		address: false,
		telephone: false
	},
	alternates: {
		canonical: '/'
	},
	openGraph: {
		type: 'website',
		locale: 'fr_FR',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.name,
		description: siteConfig.description,
		creator: siteConfig.twitter.handle,
		site: siteConfig.twitter.site,
		images: [siteConfig.ogImage]
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large' as const,
			'max-snippet': -1
		}
	},
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
		yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
		yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION
	}
};

// Helper pour générer les métadonnées de page
export function generatePageMetadata({
	title,
	description,
	path = '',
	image,
	noindex = false
}: {
	title: string;
	description: string;
	path?: string;
	image?: string;
	noindex?: boolean;
}) {
	const fullTitle = `${title} | ${siteConfig.name}`;
	const url = `${siteConfig.url}${path}`;
	const ogImage = image || siteConfig.ogImage;

	return {
		title: fullTitle,
		description,
		alternates: {
			canonical: url
		},
		openGraph: {
			title: fullTitle,
			description,
			url,
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: title
				}
			]
		},
		twitter: {
			title: fullTitle,
			description,
			images: [ogImage]
		},
		robots: {
			index: !noindex,
			follow: !noindex
		}
	};
}
