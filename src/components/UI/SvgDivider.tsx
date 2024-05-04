import React from 'react';
import { FC } from 'react';

interface SvgDividerProps {
  firstColor: string;
  secondColor: string;
  thirdColor: string;
  fourthColor: string;
}

const SvgDivider: FC<SvgDividerProps> = ({
  firstColor,
  secondColor,
  thirdColor,
  fourthColor,
}) => {
  return (
    <svg
      className="editorial "
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z"
        />
      </defs>
      <g className="parallax1">
        <use
          xlinkHref="#gentle-wave"
          x={50}
          y={3}
          fill={firstColor}
        />
      </g>
      <g className="parallax2">
        <use
          xlinkHref="#gentle-wave"
          x={50}
          y={0}
          fill={secondColor}
        />
      </g>
      <g className="parallax3">
        <use
          xlinkHref="#gentle-wave"
          x={50}
          y={9}
          fill={thirdColor}
        />
      </g>
      <g className="parallax4">
        <use
          xlinkHref="#gentle-wave"
          x={50}
          y={6}
          fill={fourthColor}
        />
      </g>
    </svg>
  );
};

export default SvgDivider;
