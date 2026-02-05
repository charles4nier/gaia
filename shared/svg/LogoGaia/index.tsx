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
			width="240"
			height="80"
			viewBox="0 0 240 80"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label="GAIA"
			>
			<text
				x="120"
				y="52"
				text-anchor="middle"
				fill="white"
				font-family="Inter, Helvetica Neue, Arial, sans-serif"
				font-size="32"
				font-weight="400"
				letter-spacing="0.35em"
			>
				GAIA
			</text>
		</svg>
	);
}
