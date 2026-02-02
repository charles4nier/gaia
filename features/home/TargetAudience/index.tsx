import './style.scss';
import Link from 'next/link';

export default function TargetAudience() {
	const title = "À qui s'adresse GAIA?";
	const descriptionLines = [
		{
			title: 'TPE · PME · ETI',
			subtitle: 'Organisations souhaitant structurer ou faire évoluer leurs systèmes de management sans complexité inutile.'
		},
		{
			title: 'Dirigeants & responsables QSE / RSE',
			subtitle: 'Acteurs en charge du pilotage, de la conformité et de l\'amélioration continue des démarches internes.'
		},
		{
			title: 'Organisations en projet de certification',
			subtitle: 'Structures engagées ou en préparation de certification ou de labellisation, quel que soit leur niveau de maturité.'
		}
	];
	return (
		<section className="target-audience">
			<div className="container">
				<h2 className="target-audience__title">{title}</h2>
				<p className="target-audience__intro text-level-2">Des organisations aux réalités différentes, avec un même besoin : structurer des démarches utiles et compréhensibles.</p>
				<ul className="target-audience__list">
					{descriptionLines.map((item, index) => (
						<li key={index}>
							<h3 className="target-audience__item-title text-level-1">
								<span className="target-audience__item-accent"></span>
								{item.title}
							</h3>
							<p className="target-audience__item-subtitle text-level-3">{item.subtitle}</p>
						</li>
					))}
				</ul>
				<Link href="/offres" className="button-tertiary">
					Découvrir les offres
				</Link>
			</div>
		</section>
	);
}
