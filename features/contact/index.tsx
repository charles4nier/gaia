import './style.scss';
import ContactHero from './Hero';
import ContactForm from './ContactForm';
import type { RequestType } from './types';

interface ContactProps {
	defaultRequestType?: RequestType;
}

export default function Contact({ defaultRequestType }: ContactProps) {
	return (
		<div className="contact">
			<section className="contact-section">
				<div className="container">
					<h1 className="contact-section__title">Demandez un devis, parlez-nous de votre projet ou inscrivez-vous à une formation.</h1>
					<ContactForm defaultRequestType={defaultRequestType} />
				</div>
			</section>
		</div>
	);
}
