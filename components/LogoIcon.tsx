import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

interface LogoIconProps {
  width?: number;
  height?: number;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ width = 52, height = 52 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 52 52" fill="none">
      <Defs>
        <LinearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#6366f1" />
          <Stop offset="100%" stopColor="#8b5cf6" />
        </LinearGradient>
      </Defs>
      <Path
        d="M26 4C13.85 4 4 13.85 4 26s9.85 22 22 22 22-9.85 22-22S38.15 4 26 4zm0 40c-9.93 0-18-8.07-18-18S16.07 8 26 8s18 8.07 18 18-8.07 18-18 18z"
        fill="url(#logoGradient)"
      />
      <Path
        d="M26 12c-7.73 0-14 6.27-14 14s6.27 14 14 14 14-6.27 14-14-6.27-14-14-14zm0 24c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z"
        fill="url(#logoGradient)"
      />
      <Path
        d="M26 16c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
        fill="url(#logoGradient)"
      />
    </Svg>
  );
};