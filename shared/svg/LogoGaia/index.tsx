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
		<svg
			width="300"
			height="100"
			viewBox="0 0 300 100"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label="GAIA"
			>

		<text
			x="150"
			y="62"
			text-anchor="middle"
			font-size="42"
			fill="white"
		>
			GAIA
		</text>
		</svg>


	);
}
