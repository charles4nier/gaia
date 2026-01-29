'use client';

import { useState } from 'react';
import './style.scss';

interface FormationCardProps {
	title: string;
	duree?: string;
	descriptifApprentissage?: string;
	methodologie?: string;
	defaultExpanded?: boolean;
}

export default function FormationCard({
	title,
	duree,
	descriptifApprentissage,
	methodologie,
	defaultExpanded = false
}: FormationCardProps) {
	const [isExpanded, setIsExpanded] = useState(defaultExpanded);

	return (
		<div className={`formation-card ${isExpanded ? 'formation-card--expanded' : ''}`}>
			<div className="formation-card__header" onClick={() => setIsExpanded(!isExpanded)}>
				<h3 className="formation-card__title">{title}</h3>
				<button className="formation-card__toggle" aria-label={isExpanded ? 'Réduire' : 'Voir plus'}>
					{isExpanded ? 'Voir moins' : 'Voir plus'}
					<svg
						className={`formation-card__icon ${isExpanded ? 'formation-card__icon--expanded' : ''}`}
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4 6L8 10L12 6"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>

			<div className="formation-card__content">
				{duree && (
					<div className="formation-card__field">
						<span className="formation-card__field-label">Durée :</span>
						<span className="formation-card__field-value">{duree}</span>
					</div>
				)}

				{descriptifApprentissage && (
					<div className="formation-card__field">
						<span className="formation-card__field-label">Descriptif de l'apprentissage :</span>
						<p className="formation-card__field-value">{descriptifApprentissage}</p>
					</div>
				)}

				{methodologie && (
					<div className="formation-card__field">
						<span className="formation-card__field-label">Méthodologie :</span>
						<p className="formation-card__field-value">{methodologie}</p>
					</div>
				)}
			</div>
		</div>
	);
}
