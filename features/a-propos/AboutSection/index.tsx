import './style.scss';

interface AboutSectionProps {
	title: string;
	description: string;
	items?: string[];
	hasEncart?: boolean;
}

export default function AboutSection({
	title,
	description,
	items,
	hasEncart = false
}: AboutSectionProps) {
	return (
		<section className="about-section">
			<div className="container">
				<h2 className="about-section__title">{title}</h2>

				<div className="about-section__content-wrapper">
					<div className="about-section__description-block">
						<p className="about-section__description text-level-2">{description}</p>
					</div>

					{items && items.length > 0 && (
						<div className={`about-section__items ${hasEncart ? 'about-section__items--encart' : ''}`}>
							<ul className="about-section__items-list">
								{items.map((item, index) => (
									<li key={index} className="about-section__items-list-item">
										{item}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
