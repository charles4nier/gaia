import './style.scss';

export default function Approach() {
	const title = "Notre approche";
	const subtitle = "Du référentiel au terrain. Du terrain au système.";
	const items = [
		{ 
			title: 'Une compréhension fine des exigences',
			description: 'Analyse des référentiels et de leurs implications concrètes sur votre organisation.'
		},
		{ 
			title: 'Une expérience réelle de l\'audit',
			description: 'Une pratique de terrain qui permet d\'identifier les écarts réels, pas théoriques.'
		},
		{ 
			title: 'Une adaptation aux pratiques existantes',
			description: 'Les systèmes sont construits à partir de ce qui fonctionne déjà, sans rupture inutile.'
		},
		{ 
			title: 'Un accompagnement sur mesure',
			description: 'Présence, écoute et ajustement tout au long de la démarche.'
		}
	];
	const icons = [
		<svg key="0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
			<rect x="9" y="2" width="6" height="4" rx="1"/>
			<path d="M9 4H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/>
			<path d="M9 14l2 2 4-4"/>
		</svg>,
		<svg key="1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
			<circle cx="12" cy="8" r="5"/>
			<path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5"/>
			<path d="M10 8l1.5 1.5L14 7"/>
		</svg>,
		<svg key="2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
			<line x1="4" y1="6" x2="20" y2="6"/>
			<line x1="4" y1="12" x2="20" y2="12"/>
			<line x1="4" y1="18" x2="20" y2="18"/>
			<circle cx="9" cy="6" r="2"/>
			<circle cx="15" cy="12" r="2"/>
			<circle cx="11" cy="18" r="2"/>
		</svg>,
		<svg width="48" height="48" viewBox="0 0 48 48" fill="none"
				xmlns="http://www.w3.org/2000/svg">
			<path d="M24 6l4.7 9.8 10.8 1
					-8.2 7.1 2.4 10.5
					L24 30.5 14.3 34.4
					16.7 23.9 8.5 16.8
					19.3 15.8 24 6z"
				stroke="white"
				stroke-width="2"
				fill="none"
				stroke-linejoin="round"/>
		</svg>
   
	];

	return (
		<section className="approach">
			<h2 className="approach__title">{title}</h2>
			<p className="approach__subtitle">{subtitle}</p>
			<ul className="approach-list">
				{items.map((item, index) => (
					<li key={index}>
						<span className="approach-list__icon">{icons[index]}</span>
						<div className="approach-list__content">
							<span className="approach-list__title">{item.title}</span>
							<div className="approach-list__divider"></div>
							<span className="approach-list__description">{item.description}</span>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
