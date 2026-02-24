export type RequestType = 'devis' | 'projet' | 'formation';

export interface ContactFormData {
	objet: RequestType;
	prenom: string;
	nom: string;
	email: string;
	telephone: string;
	societe: string;
	message: string;
}

export const REQUEST_TYPE_LABELS: Record<RequestType, string> = {
	devis: 'Demander un devis',
	projet: 'Parler de mon projet',
	formation: "S'inscrire à une formation"
};
