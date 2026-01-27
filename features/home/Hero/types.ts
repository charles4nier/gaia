import { SanityImage } from '@types/sanity';

export interface HeroPropsType {
	title?: string;
	tagline?: string;
	description?: string;
	buttonOffersLabel?: string;
	buttonContactLabel?: string;
	image?: SanityImage | null;
}
