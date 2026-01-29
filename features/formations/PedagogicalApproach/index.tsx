import './style.scss';

export default function PedagogicalApproach() {
	const title = "Approche pédagogique";
	const description = "Former ne consiste pas à réciter une norme. Les formations s'appuient sur des situations réelles d'audit, des exemples concrets issus du terrain et des échanges avec les participants. Les outils proposés sont directement utilisables dans le contexte professionnel.\n\nL'objectif est de permettre aux stagiaires de repartir avec une vision claire, des repères solides et une capacité réelle à agir.";
	const modalitesTitle = "Modalités";
	const modalitesText = "Les formations sont proposées en présentiel ou à distance, en intra-entreprise ou sur mesure, selon les besoins et le contexte de l'organisation. Des supports pédagogiques sont systématiquement fournis.\n\nLes formations peuvent également s'inscrire dans un accompagnement global, en lien avec les démarches de structuration ou d'amélioration des systèmes de management.";

	return (
		<section className="pedagogical-approach">
			<div className="container">
				<h2 className="pedagogical-approach__title">{title}</h2>
				<div className="pedagogical-approach__content-wrapper">
					<div className="pedagogical-approach__text-block">
						<p className="pedagogical-approach__description text-level-2">{description}</p>
					</div>
					<div className="pedagogical-approach__modalites-box">
						<h3 className="pedagogical-approach__modalites-title">{modalitesTitle}</h3>
						<p className="pedagogical-approach__modalites-text text-level-2">{modalitesText}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
