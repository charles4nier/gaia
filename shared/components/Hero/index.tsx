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
			<div className="hero__content">
				<div className="hero__text-column">
					<div className="container">
						<div className="hero__text-box">
							{children}
						</div>
					</div>
				</div>
				<div className="hero__image-column">
					<div className="hero__image-wrapper">
						<Image
							src={imageSrc}
							alt={imageAlt}
							fill
							priority={true}
							sizes="(max-width: 768px) 100vw, 50vw"
							quality={85}
							style={{ objectFit: 'cover' }}
							className="hero__image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
