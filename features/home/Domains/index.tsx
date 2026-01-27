import './style.scss';

export default function Domains() {
	const domains = [
		'Qualité',
		'Environnement',
		'Santé et sécurité au travail',
		'Responsabilité sociétale',
		'Événementiel responsable',
		'Métiers d\'art et savoir-faire (EPV)'
	];

	return (
		<section className="domains">
			<h2 className="domains__title">Nos domaines d'intervention</h2>
			<div className="domains__wrapper">
				<ul>
					{domains.map((domain, index) => (
						<li key={index}>{domain}</li>
					))}
				</ul>
			</div>
		</section>
	);
}
