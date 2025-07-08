import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

interface LogoTextProps {
  width?: number;
  height?: number;
}

export const LogoText: React.FC<LogoTextProps> = ({ width = 110, height = 32.29 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 110 33" fill="none">
      <Defs>
        <LinearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#1a1a1a" />
          <Stop offset="100%" stopColor="#4a4a4a" />
        </LinearGradient>
      </Defs>
      {/* M */}
      <Path
        d="M8 6V26H12V12L18 22H20L26 12V26H30V6H25L19 18L13 6H8Z"
        fill="url(#textGradient)"
      />
      {/* Y */}
      <Path
        d="M38 6L44 16L50 6H55L46 20V26H42V20L33 6H38Z"
        fill="url(#textGradient)"
      />
      {/* U */}
      <Path
        d="M62 6V18C62 20.2091 63.7909 22 66 22C68.2091 22 70 20.2091 70 18V6H74V18C74 22.4183 70.4183 26 66 26C61.5817 26 58 22.4183 58 18V6H62Z"
        fill="url(#textGradient)"
      />
      {/* Z */}
      <Path
        d="M82 6V10H92L82 22V26H98V22H88L98 10V6H82Z"
        fill="url(#textGradient)"
      />
      {/* E */}
      <Path
        d="M106 6V10H100V14H105V18H100V22H106V26H96V6H106Z"
        fill="url(#textGradient)"
      />
    </Svg>
  );
};