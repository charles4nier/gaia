import React from 'react';
import Image from 'next/image';

interface LogoGaiaProps {
	className?: string;
	width?: number | string;
	height?: number | string;
}

export default function LogoGaia({
	className,
	width = 200,
	height = 80
}: LogoGaiaProps) {
	return (
		<Image
			src="/logo-image.png"
			alt="GAIA - Audit Conseil Formation"
			fill
			priority={true}
			sizes="(max-width: 768px) 100vw, 50vw"
			quality={85}
			className="logo-gaia"
		/>
		// <svg
		// 	width={width}
		// 	height={height}
		// 	viewBox="0 0 200 80"
		// 	xmlns="http://www.w3.org/2000/svg"
		// 	className={className}
		// >
		// 	{/* Cercle avec bandes courbes et feuille centrale */}
		// 	<g transform="translate(40, 40)">
		// 		{/* Bande extérieure gris foncé */}
		// 		<path
		// 			d="M 0,-30 A 30,30 0 0,1 21.21,-21.21 A 30,30 0 0,1 30,0"
		// 			fill="none"
		// 			stroke="#2d2d2d"
		// 			strokeWidth="3"
		// 			strokeLinecap="round"
		// 		/>
		// 		<path
		// 			d="M 30,0 A 30,30 0 0,1 21.21,21.21 A 30,30 0 0,1 0,30"
		// 			fill="none"
		// 			stroke="#2d2d2d"
		// 			strokeWidth="3"
		// 			strokeLinecap="round"
		// 		/>
		// 		<path
		// 			d="M 0,30 A 30,30 0 0,1 -21.21,21.21 A 30,30 0 0,1 -30,0"
		// 			fill="none"
		// 			stroke="#2d2d2d"
		// 			strokeWidth="3"
		// 			strokeLinecap="round"
		// 		/>
		// 		<path
		// 			d="M -30,0 A 30,30 0 0,1 -21.21,-21.21 A 30,30 0 0,1 0,-30"
		// 			fill="none"
		// 			stroke="#2d2d2d"
		// 			strokeWidth="3"
		// 			strokeLinecap="round"
		// 		/>

		// 		{/* Bande gris clair */}
		// 		<path
		// 			d="M 0,-25 A 25,25 0 0,1 17.68,-17.68 A 25,25 0 0,1 25,0"
		// 			fill="none"
		// 			stroke="#6b6b6b"
		// 			strokeWidth="2.5"
		// 			strokeLinecap="round"
		// 		/>
		// 		<path
		// 			d="M 25,0 A 25,25 0 0,1 17.68,17.68 A 25,25 0 0,1 0,25"
		// 			fill="none"
		// 			stroke="#6b6b6b"
		// 			strokeWidth="2.5"
		// 			strokeLinecap="round"
		// 		/>
		// 		<path
		// 			d="M 0,25 A 25,25 0 0,1 -17.68,17.68 A 25,25 0 0,1 -25,0"
		// 			fill="none"
		// 			stroke="#6b6b6b"
		// 			strokeWidth="2.5"
		// 			strokeLinecap="round"
		// 		/>
		// 		<path
		// 			d="M -25,0 A 25,25 0 0,1 -17.68,-17.68 A 25,25 0 0,1 0,-25"
		// 			fill="none"
		// 			stroke="#6b6b6b"
		// 			strokeWidth="2.5"
		// 			strokeLinecap="round"
		// 		/>

		// 		{/* Bande verte foncée */}
		// 		<path
		// 			d="M 0,-20 A 20,20 0 0,1 14.14,-14.14 A 20,20 0 0,1 20,0"
		// 			fill="none"
		// 			stroke="#2d5a3d"
		// 			strokeWidth="2"
		// 			strokeLinecap="round"
		// 		/>
		// 		<path
		// 			d="M 20,0 A 20,20 0 0,1 14.14,14.14 A 20,20 0 0,1 0,20"
		// 			fill="none"
		// 			stroke="#2d5a3d"
		// 			strokeWidth="2"
		// 			strokeLinecap="round"
		// 		/>
		// 		<path
		// 			d="M 0,20 A 20,20 0 0,1 -14.14,14.14 A 20,20 0 0,1 -20,0"
		// 			fill="none"
		// 			stroke="#2d5a3d"
		// 			strokeWidth="2"
		// 			strokeLinecap="round"
		// 		/>
		// 		<path
		// 			d="M -20,0 A 20,20 0 0,1 -14.14,-14.14 A 20,20 0 0,1 0,-20"
		// 			fill="none"
		// 			stroke="#2d5a3d"
		// 			strokeWidth="2"
		// 			strokeLinecap="round"
		// 		/>

		// 		{/* Feuille centrale stylisée */}
		// 		<path
		// 			d="M -8,-12 Q -5,-15 0,-12 Q 5,-15 8,-12 Q 6,-8 4,-5 Q 2,-2 0,0 Q -2,-2 -4,-5 Q -6,-8 -8,-12 Z"
		// 			fill="#4a8c5f"
		// 			stroke="#2d5a3d"
		// 			strokeWidth="0.5"
		// 		/>
		// 		{/* Veine centrale de la feuille */}
		// 		<line
		// 			x1="0"
		// 			y1="-12"
		// 			x2="0"
		// 			y2="0"
		// 			stroke="#2d5a3d"
		// 			strokeWidth="0.8"
		// 			strokeLinecap="round"
		// 		/>
		// 	</g>

		// 	{/* Texte GAIA */}
		// 	<text
		// 		x="90"
		// 		y="35"
		// 		fontFamily="Arial, sans-serif"
		// 		fontSize="28"
		// 		fontWeight="bold"
		// 		fill="#2d2d2d"
		// 	>
		// 		GAIA
		// 	</text>

		// 	{/* Ligne horizontale */}
		// 	<line
		// 		x1="90"
		// 		y1="42"
		// 		x2="195"
		// 		y2="42"
		// 		stroke="#2d2d2d"
		// 		strokeWidth="1"
		// 	/>

		// 	{/* Texte AUDIT • CONSEIL • FORMATION */}
		// 	<text
		// 		x="90"
		// 		y="55"
		// 		fontFamily="Arial, sans-serif"
		// 		fontSize="9"
		// 		fontWeight="normal"
		// 		fill="#2d5a3d"
		// 	>
		// 		AUDIT • CONSEIL • FORMATION
		// 	</text>
		// </svg>
	);
}
