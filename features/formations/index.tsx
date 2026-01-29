import './style.scss';
import FormationsHero from './Hero';
import PedagogicalApproach from './PedagogicalApproach';
import FormationsGrid from './FormationsGrid';

interface Formation {
	title: string;
	duree?: string;
	descriptifApprentissage?: string;
	methodologie?: string;
}

interface FormationsProps {
	formations?: Formation[];
}

export default function Formations({ formations = [] }: FormationsProps) {
	return (
		<div className="formations">
			<FormationsHero />
			<PedagogicalApproach />
			{formations.length > 0 && <FormationsGrid formations={formations} />}
		</div>
	);
}
