export default {
	name: 'offres',
	title: 'Page Offres',
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
			name: 'sections',
			title: 'Sections d\'offres',
			type: 'array',
			of: [
				{
					type: 'object',
					name: 'offerSection',
					title: 'Section',
					fields: [
						{
							name: 'title',
							title: 'Titre de la section',
							type: 'string',
							validation: (Rule: any) => Rule.required()
						},
						{
							name: 'description',
							title: 'Description',
							type: 'text',
							validation: (Rule: any) => Rule.required()
						},
						{
							name: 'items',
							title: 'Encadrés avec liste',
							type: 'array',
							description: 'Ajoutez des encadrés avec un titre et une liste',
							of: [
								{
									type: 'object',
									name: 'itemBox',
									title: 'Encadré avec titre et liste',
									fields: [
										{
											name: 'title',
											title: 'Titre de l\'encadré',
											type: 'string',
											description: 'Ex: "Types d\'audits proposés :"',
											validation: (Rule: any) => Rule.required()
										},
										{
											name: 'list',
											title: 'Liste des éléments',
											type: 'array',
											of: [{ 
												type: 'string',
												title: 'Élément de la liste'
											}],
											description: 'Ajoutez chaque élément de la liste (une ligne = un élément)',
											validation: (Rule: any) => Rule.min(1).error('La liste doit contenir au moins un élément')
										}
									],
									preview: {
										select: {
											title: 'title',
											subtitle: 'list'
										},
										prepare({ title, subtitle }: any) {
											const count = subtitle?.length || 0;
											return {
												title: title || 'Sans titre',
												subtitle: `${count} élément${count > 1 ? 's' : ''}`
											};
										}
									}
								}
							]
						},
						{
							name: 'ctaBox',
							title: 'Encadré appel à l\'action',
							type: 'object',
							description: 'Encadré vert avec texte et bouton CTA',
							fields: [
								{
									name: 'text',
									title: 'Texte',
									type: 'text',
									description: 'Texte libre pour l\'encadré CTA'
								},
								{
									name: 'buttonLabel',
									title: 'Label du bouton',
									type: 'string',
									description: 'Ex: "Demander un devis d\'audit"'
								},
								{
									name: 'buttonHref',
									title: 'Lien du bouton',
									type: 'string',
									description: 'Ex: "/contact"',
									initialValue: '/contact'
								}
							]
						}
					],
					preview: {
						select: {
							title: 'title'
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
