import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

interface LogoTextProps {
  width?: number;
  height?: number;
}

export const LogoText: React.FC<LogoTextProps> = ({ width = 110, height = 32 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 110 32" fill="none">
      <Defs>
        <LinearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#1a1a1a" />
          <Stop offset="100%" stopColor="#4a4a4a" />
        </LinearGradient>
      </Defs>
      {/* M */}
      <Path
        d="M8 4h4l6 16 6-16h4v24h-3V10l-5 14h-4l-5-14v18H8V4z"
        fill="url(#textGradient)"
      />
      {/* Y */}
      <Path
        d="M36 4h3l6 10 6-10h3l-8 14v10h-3V18l-8-14z"
        fill="url(#textGradient)"
      />
      {/* U */}
      <Path
        d="M58 4h3v14c0 3.31 2.69 6 6 6s6-2.69 6-6V4h3v14c0 4.97-4.03 9-9 9s-9-4.03-9-9V4z"
        fill="url(#textGradient)"
      />
      {/* Z */}
      <Path
        d="M82 4h16v3H88l12 15v3H82v-3h12L82 7V4z"
        fill="url(#textGradient)"
      />
      {/* E */}
      <Path
        d="M104 4h12v3h-9v6h8v3h-8v6h9v3h-12V4z"
        fill="url(#textGradient)"
      />
    </Svg>
  );
};