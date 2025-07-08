import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop, RadialGradient } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

interface BackgroundGradientProps {
  width: number;
  height: number;
  style?: any;
}

export const BackgroundGradient1: React.FC<BackgroundGradientProps> = ({ width, height, style }) => {
  return (
    <View style={[{ position: 'absolute' }, style]}>
      <Svg width={width} height={height} viewBox="0 0 316 323" fill="none">
        <Defs>
          <RadialGradient id="gradient1" cx="50%" cy="30%" r="70%">
            <Stop offset="0%" stopColor="#f0f9ff" stopOpacity="0.8" />
            <Stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.6" />
            <Stop offset="100%" stopColor="#bae6fd" stopOpacity="0.4" />
          </RadialGradient>
        </Defs>
        <Path
          d="M0 80C0 35.8172 35.8172 0 80 0H236C280.183 0 316 35.8172 316 80V243C316 287.183 280.183 323 236 323H80C35.8172 323 0 287.183 0 243V80Z"
          fill="url(#gradient1)"
        />
        <Path
          d="M50 120C50 93.4903 71.4903 72 98 72H218C244.51 72 266 93.4903 266 120V203C266 229.51 244.51 251 218 251H98C71.4903 251 50 229.51 50 203V120Z"
          fill="url(#gradient1)"
          fillOpacity="0.3"
        />
      </Svg>
    </View>
  );
};

export const BackgroundGradient2: React.FC<BackgroundGradientProps> = ({ width, height, style }) => {
  return (
    <View style={[{ position: 'absolute' }, style]}>
      <Svg width={width} height={height} viewBox="0 0 350 558" fill="none">
        <Defs>
          <LinearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#fef3c7" stopOpacity="0.6" />
            <Stop offset="30%" stopColor="#fde68a" stopOpacity="0.5" />
            <Stop offset="70%" stopColor="#f59e0b" stopOpacity="0.3" />
            <Stop offset="100%" stopColor="#d97706" stopOpacity="0.2" />
          </LinearGradient>
          <RadialGradient id="gradient2b" cx="70%" cy="40%" r="60%">
            <Stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
            <Stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
          </RadialGradient>
        </Defs>
        <Path
          d="M0 60C0 26.8629 26.8629 0 60 0H290C323.137 0 350 26.8629 350 60V498C350 531.137 323.137 558 290 558H60C26.8629 558 0 531.137 0 498V60Z"
          fill="url(#gradient2)"
        />
        <Path
          d="M70 150C70 127.909 87.909 110 110 110H240C262.091 110 280 127.909 280 150V408C280 430.091 262.091 448 240 448H110C87.909 448 70 430.091 70 408V150Z"
          fill="url(#gradient2b)"
        />
        <Path
          d="M120 200C120 188.954 128.954 180 140 180H210C221.046 180 230 188.954 230 200V358C230 369.046 221.046 378 210 378H140C128.954 378 120 369.046 120 358V200Z"
          fill="url(#gradient2)"
          fillOpacity="0.2"
        />
      </Svg>
    </View>
  );
};