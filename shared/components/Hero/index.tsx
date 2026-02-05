import './style.scss';
import Image from 'next/image';
import type { ReactNode } from 'react';

interface HeroProps {
	children: ReactNode;
}

export default function Hero({ children}: HeroProps) {
	return (
		<div className="hero">
			<div className="hero__content">
				<div className="container">
					<div className="hero__text-column">
						{children}
					</div>
					<div className="hero__image-column">
						<div className="hero__image-wrapper">
							<Image
								src="/hero-image.png"
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
		</div>
	);
}
