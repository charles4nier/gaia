import './style.scss';
import Link from 'next/link';

export default function Why() {
	const title = "Pourquoi GAIA?";
	const description = "Contactez GAIA pour échanger sur vos enjeux et définir un accompagnement adapté.";
	const buttonLabel = "Contacter GAIA";

	return (
		<section className="why">
			<div className="container">
				<h2 className="why__title">{title}</h2>
				<p className="why__description">{description}</p>
				<Link href="/contact" className="button-contact">
					{buttonLabel}
				</Link>
			</div>
		</section>
	);
}
