import './style.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
	const title = "Construire des systèmes de management utiles, cohérents et réellement applicables au quotidien.";
	const tagline = "Audit, conseil, accompagnement et formation en ISO, RSE, EPV et systèmes de management intégrés.";
	const description = "GAIA accompagne les organisations dans la structuration, l'amélioration et le pilotage de systèmes de management adaptés à leurs réalités opérationnelles.";
	const buttonOffersLabel = "Découvrir les offres";
	const buttonContactLabel = "Parlons de votre projet";

	return (
		<div className="hero">
			<div className="hero__content container">
				<div className="hero__text">
					<h1 className="hero__title">{title}</h1>
					<p className="hero__tagline text-level-1">{tagline}</p>
					<p className="hero__description text-level-2">{description}</p>
					<div className="hero__ui-container">
						<Link href="/formations" className="button-primary">
							{buttonContactLabel}
						</Link>
						<Link href="/offres" className="button-tertiary">
							{buttonOffersLabel}
						</Link>
					</div>
				</div>
				{/* <div className="hero__image-column">
					<div className="hero__image-wrapper">
						<Image
							src="/hero-image.png"
							alt="GAIA - Audit Conseil Formation"
							fill
							priority={true}
							sizes="(max-width: 768px) 100vw, 50vw"
							quality={85}
							style={{ objectFit: 'cover' }}
							className="hero__image"
						/>
					</div>
				</div> */}
			</div>
		</div>
	);
}
