import { SanityImage } from '@types/sanity';

export interface SanityImageProps {
	image: SanityImage | null;
	alt?: string;
	width?: number;
	height?: number;
	className?: string;
	quality?: number;
	sizes?: string;
	priority?: boolean;
	placeholder?: 'blur' | 'empty';
	blurDataURL?: string;
}
