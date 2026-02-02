import './style.scss';
import Image from 'next/image';
import type { ReactNode } from 'react';

interface HeroProps {
	children: ReactNode;
	imageSrc?: string;
	imageAlt?: string;
}

export default function Hero({ children, imageSrc = '/hero-image.png', imageAlt = 'GAIA' }: HeroProps) {
	return (
		<div className="hero">
			<div className="hero__content container">
				{children}
			</div>
		</div>
	);
}
