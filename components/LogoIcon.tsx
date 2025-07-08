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
        d="M26 4C37.0457 4 46 12.9543 46 24V28C46 39.0457 37.0457 48 26 48C14.9543 48 6 39.0457 6 28V24C6 12.9543 14.9543 4 26 4Z"
        fill="url(#logoGradient)"
      />
      <Path
        d="M19 20C19 18.8954 19.8954 18 21 18H31C32.1046 18 33 18.8954 33 20V32C33 33.1046 32.1046 34 31 34H21C19.8954 34 19 33.1046 19 32V20Z"
        fill="white"
      />
      <Path
        d="M23 22C22.4477 22 22 22.4477 22 23V29C22 29.5523 22.4477 30 23 30H29C29.5523 30 30 29.5523 30 29V23C30 22.4477 29.5523 22 29 22H23Z"
        fill="url(#logoGradient)"
      />
    </Svg>
  );
};