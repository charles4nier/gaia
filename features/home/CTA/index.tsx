import './style.scss';
import Link from 'next/link';
import { CTAPropsType } from './types';

export default function CTA({
	title,
	description,
	buttonLabel
}: CTAPropsType) {
	return (
		<section className="cta">
			<div className="container">
				{title && <h2 className="cta__title">{title}</h2>}
				{description && (
					<p className="cta__description">{description}</p>
				)}
				{buttonLabel && (
					<Link href="/contact" className="button-contact">
						{buttonLabel}
					</Link>
				)}
			</div>
		</section>
	);
}
