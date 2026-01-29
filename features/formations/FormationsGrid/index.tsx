'use client';

import FormationCard from '../FormationCard';
import './style.scss';

interface Formation {
	title: string;
	duree?: string;
	descriptifApprentissage?: string;
	methodologie?: string;
}

interface FormationsGridProps {
	formations: Formation[];
}

export default function FormationsGrid({ formations }: FormationsGridProps) {
	return (
		<section className="formations-grid-section">
			<div className="container">
				<h2 className="formations-grid-section__title">Formations</h2>
				<div className="formations-grid">
					{formations.map((formation, index) => (
						<FormationCard
							key={index}
							title={formation.title}
							duree={formation.duree}
							descriptifApprentissage={formation.descriptifApprentissage}
							methodologie={formation.methodologie}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
