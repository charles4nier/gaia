import './style.scss';

interface AboutThemeProps {
	title: string;
	description1: string;
	description2: string;
}

export default function AboutTheme({
	title,
	description1,
	description2,
}: AboutThemeProps) {
	return (
		<div className="about-theme">
			<h2 className="about-theme__title">{title}</h2>
			<div className="about-theme__description-block">
					<p className="about-theme__description text-level-2">{description1}</p>
					<p className="about-theme__description text-level-2">{description2}</p>
				</div>
		</div>
);
}
