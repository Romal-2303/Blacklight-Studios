import React from 'react';

interface SalesIconProps {
	fill?: string; // Optional prop for the stroke color
}

const SalesIcon: React.FC<SalesIconProps> = ({ fill = "#000000" }) => {
	return (
		<svg
			version="1.0"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="15px"
			height="15px"
			viewBox="0 0 64 64"
			enableBackground="new 0 0 64 64"
			xmlSpace="preserve"
		>
			<g>
				<polygon
					fill="none"
					stroke={fill}
					strokeWidth="2"
					strokeMiterlimit="10"
					points="21.903,5 55,38.097 34.097,59 1,25.903 1,5"
				/>
				<polyline
					fill="none"
					stroke={fill}
					strokeWidth="2"
					strokeMiterlimit="10"
					points="29.903,5 63,38.097 42.097,59"
				/>
				<circle
					fill="none"
					stroke={fill}
					strokeWidth="2"
					strokeMiterlimit="10"
					cx="14"
					cy="18"
					r="5"
				/>
			</g>
		</svg>
	);
};

export default SalesIcon;
