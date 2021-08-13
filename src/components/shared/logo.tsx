import React from "react";

interface LogoProps {
	fill?: string;
}

const Logo = ({ fill = "#000" }: LogoProps) => {
	return (
		<svg style={{ width: "88px", height: "auto" }} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='101px' height='46px' viewBox='0 0 101 46' version='1.1'>
			<desc>Created with Sketch.</desc>
			<defs></defs>
			<g id='Home' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' transform='translate(-144.000000, -42.000000)'>
				<path d='M174.918911,50.0918135 L166.999229,42 L144,65.0236003 L166.991037,88 L174.580988,80.4048182 L159.370367,65.0071827 L174.918911,50.0918135 Z M214.144578,80.0477359 L222.074499,87.9917912 L245,64.9989739 L222.074499,42.0574615 L214.457924,49.7716708 L229.410496,64.9907651 L214.144578,80.0477359 Z M216.260179,63.7594468 L208.336402,55.8112871 L185.392469,78.7958956 L193.31215,86.7420031 L216.260179,63.7594468 Z M180.768047,74.2215481 L172.850414,66.2877537 L195.816875,43.2949364 L203.726316,51.2041044 L180.768047,74.2215481 Z' id='LogoPrimariu' fill={fill}></path>
			</g>
		</svg>
	);
};

export default Logo;
