// components/PokeMuMuLogo.tsx
import React from 'react';

type PokeMuMuLogoProps = {
  color?: string;
  width?: number;
  height?: number;
};

const PokeMuMuLogo = ({
  color = '#0f172a',
  width = 135,
  height = 40,
}: PokeMuMuLogoProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 190 61"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color }}
    >
      <text
        x="10"
        y="38"
        fontFamily="Verdana, sans-serif"
        fontWeight="bold"
        fontSize="26"
        fill="currentColor"
      >
        POKÉ MUMU
      </text>
    </svg>
  );
};

export default PokeMuMuLogo;
