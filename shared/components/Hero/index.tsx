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
				<div className="hero__image-column">
					<div className="hero__image-wrapper">
						<Image
							src="/hero-image-test.png"
							alt="GAIA - Audit Conseil Formation"
							fill
							priority={true}
							sizes="(max-width: 768px) 100vw, 50vw"
							quality={85}
							className="hero__image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
