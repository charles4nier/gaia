import './style.scss';
import Link from 'next/link';

export default function Why() {
	const title = "Pourquoi GAIA?";
	const paragraphs = [
		"GAIA s'appuie sur une double posture d'auditeur et d'accompagnant, permettant de conjuguer exigence des référentiels et compréhension des réalités opérationnelles.",
		"L'approche est pragmatique et structurée, construite à partir du terrain et orientée vers l'amélioration réelle des pratiques, au-delà du simple respect des normes.",
		"Grâce à une expérience terrain multi-référentiels, GAIA intervient sur des contextes variés et adapte les démarches au niveau de maturité des organisations.",
		"Les systèmes de management proposés sont utiles, cohérents et applicables, sans sur-normer ni complexifier inutilement les pratiques existantes."
	];
	const ctaIntro = "Contactez GAIA pour échanger sur vos enjeux et définir un accompagnement adapté.";
	const buttonLabel = "Contacter GAIA";

	return (
		<section className="why">
			<div className="container">
				<h2 className="why__title">{title}</h2>
				<div className="why__content-wrapper">
					<div className="why__text-block">
						{paragraphs.map((paragraph, index) => (
							<p key={index} className="why__paragraph text-level-2">{paragraph}</p>
						))}
					</div>
					<div className="why__cta-box">
						<p className="why__cta-intro text-level-2">{ctaIntro}</p>
						<Link href="/contact" className="button-primary">
							{buttonLabel}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
