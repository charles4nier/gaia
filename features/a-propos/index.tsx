import './style.scss';
import AProposHero from './Hero';
import AboutSection from './AboutSection';

export default function About() {
	const sections = [
		{
			title: 'Une double posture',
			description:
				'GAIA s\'appuie sur une double légitimité : l\'expérience de l\'audit et l\'accompagnement terrain des organisations et des équipes. Cette posture permet de construire des systèmes pragmatiques, adaptés et compris par les acteurs concernés.',
			items: ['l\'expérience de l\'audit', 'l\'accompagnement terrain des organisations et des équipes'],
			hasEncart: true
		},
		{
			title: 'Du référentiel au terrain',
			description:
				'Un système de management n\'est pas une fin en soi. Il doit s\'intégrer aux pratiques existantes, soutenir l\'organisation dans ses enjeux réels et évoluer dans une logique d\'amélioration continue. GAIA privilégie des démarches simples, structurées et utiles.'
		},
		{
			title: 'Former pour rendre autonome',
			description:
				'La formation est un pilier de l\'approche GAIA. Elle vise à donner du sens aux exigences, transmettre une méthode claire et favoriser l\'appropriation durable des systèmes de management par les équipes.'
		},
		{
			title: 'Une relation de partenariat',
			description:
				'GAIA intervient comme un partenaire de confiance, dans une logique de collaboration et d\'accompagnement sur le long terme.'
		}
	];

	return (
		<div className="about">
			<AProposHero />

			{sections.map((section, index) => (
				<AboutSection
					key={index}
					title={section.title}
					description={section.description}
					items={section.items}
					hasEncart={section.hasEncart}
				/>
			))}
		</div>
	);
}
