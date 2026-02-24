import React from 'react';
import Image from 'next/image';

interface LogoGaiaProps {
	className?: string;
	width?: number | string;
	height?: number | string;
}

export default function LogoGaia({
	className,
	width = 180,
	height = 40
}: LogoGaiaProps) {
	return (
		<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 168 40"
		role="img"
		aria-label="GAIA"
		width={width}
		height={height}
		>
			<text
				x="0"
				y="32"
				fill="#FBD456"
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
