import './style.scss';
import Hero from '@shared/components/Hero';

export default function AProposHero() {
	return (
		<Hero>
			<div className="hero__text">
				<h1 className="hero__title">GAIA – Audit · Conseil · Formation</h1>
				<p className="hero__description text-level-2">
					GAIA accompagne les organisations dans la construction et l'amélioration de systèmes de management
					utiles, cohérents et adaptés à leurs réalités opérationnelles.
				</p>
			</div>
		</Hero>
	);
}
