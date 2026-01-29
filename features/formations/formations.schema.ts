export default {
	name: 'formations',
	title: 'Page Formations',
	type: 'document',
	fields: [
		{
			name: 'seo',
			title: 'SEO',
			type: 'object',
			fields: [
				{
					name: 'metaTitle',
					title: 'Titre SEO',
					type: 'string',
					validation: (Rule: any) =>
						Rule.max(60).warning(
							'Le titre doit faire moins de 60 caractères'
						)
				},
				{
					name: 'metaDescription',
					title: 'Description SEO',
					type: 'text',
					validation: (Rule: any) =>
						Rule.max(160).warning(
							'La description doit faire moins de 160 caractères'
						)
				},
				{
					name: 'openGraphImage',
					title: 'Image de partage (OG)',
					type: 'image',
					options: { hotspot: true }
				}
			]
		},
		{
			name: 'formations',
			title: 'Formations',
			type: 'array',
			description: 'Liste des formations proposées',
			of: [
				{
					type: 'object',
					name: 'formation',
					title: 'Formation',
					fields: [
						{
							name: 'title',
							title: 'Titre de la formation',
							type: 'string',
							description: 'Ex: "Systèmes de management et référentiels ISO"',
							validation: (Rule: any) => Rule.required()
						},
						{
							name: 'duree',
							title: 'Durée',
							type: 'string',
							description: 'Ex: "2 jours" ou "14 heures"'
						},
						{
							name: 'descriptifApprentissage',
							title: 'Descriptif de l\'apprentissage',
							type: 'text',
							description: 'Description de ce que les participants vont apprendre'
						},
						{
							name: 'methodologie',
							title: 'Méthodologie',
							type: 'text',
							description: 'Description de la méthode pédagogique utilisée'
						}
					],
					preview: {
						select: {
							title: 'title',
							duree: 'duree'
						},
						prepare({ title, duree }: any) {
							return {
								title: title || 'Sans titre',
								subtitle: duree || 'Durée non spécifiée'
							};
						}
					}
				}
			]
		}
	],
	preview: {
		select: {
			title: 'seo.metaTitle',
			subtitle: 'seo.metaDescription'
		}
	}
};
