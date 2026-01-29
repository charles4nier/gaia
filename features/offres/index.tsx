import './style.scss';
import OffresHero from './Hero';
import OfferSection from './OfferSection';

interface OfferSectionData {
	title: string;
	description: string;
	items?: {
		title: string;
		list: string[];
	}[];
	ctaBox?: {
		text: string;
		buttonLabel: string;
		buttonHref: string;
	};
}

interface OffresProps {
	sections?: OfferSectionData[];
}

export default function Offres({ sections = [] }: OffresProps) {
	return (
		<div className="offres">
			<OffresHero />

			{sections.map((section, index) => (
				<OfferSection
					key={index}
					title={section.title}
					description={section.description}
					items={section.items?.map(item => ({
						label: item.title,
						list: item.list
					}))}
					ctaIntro={section.ctaBox?.text}
					ctaLabel={section.ctaBox?.buttonLabel}
					ctaHref={section.ctaBox?.buttonHref}
				/>
			))}
		</div>
	);
}
