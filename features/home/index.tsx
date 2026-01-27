import Hero from './Hero';
import TargetAudience from './TargetAudience';
import ApproachAndDomains from './ApproachAndDomains';
import Why from './Why';
import CTA from './CTA';
import './ApproachAndDomains/style.scss';

export default function HomePage() {
	const quote1 = "Un système de management doit être compris, appliqué et porté par les équipes pour être réellement efficace.";
	const quote2 = "L'objectif est de structurer des démarches claires, efficaces et compréhensibles, sans sur-documentation ni complexité inutile.";

	return (
		<>
			<Hero />
			<TargetAudience />
			<section className="approach-domains__quote approach-domains__quote--first">
				<div className="container">
					<p>{quote2}</p>
				</div>
			</section>
			<ApproachAndDomains />
			<section className="approach-domains__quote">
				<div className="container">
					<p>{quote1}</p>
				</div>
			</section>
			<Why />
		</>
	);
}
