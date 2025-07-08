import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path, Circle } from 'react-native-svg';

interface BackgroundGradientProps {
  style?: any;
}

export const BackgroundGradient1: React.FC<BackgroundGradientProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Svg width="316" height="323" viewBox="0 0 316 323" fill="none">
        <Defs>
          <LinearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#f8fafc" stopOpacity="0.8" />
            <Stop offset="50%" stopColor="#e2e8f0" stopOpacity="0.6" />
            <Stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.4" />
          </LinearGradient>
        </Defs>
        <Path
          d="M0 50C0 22.386 22.386 0 50 0h216c27.614 0 50 22.386 50 50v223c0 27.614-22.386 50-50 50H50c-27.614 0-50-22.386-50-50V50z"
          fill="url(#gradient1)"
        />
        <Circle cx="80" cy="80" r="40" fill="url(#gradient1)" opacity="0.3" />
        <Circle cx="200" cy="150" r="60" fill="url(#gradient1)" opacity="0.2" />
        <Circle cx="120" cy="250" r="30" fill="url(#gradient1)" opacity="0.4" />
      </Svg>
    </View>
  );
};

export const BackgroundGradient2: React.FC<BackgroundGradientProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Svg width="350" height="558" viewBox="0 0 350 558" fill="none">
        <Defs>
          <LinearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#fef3c7" stopOpacity="0.6" />
            <Stop offset="30%" stopColor="#fde68a" stopOpacity="0.5" />
            <Stop offset="70%" stopColor="#f59e0b" stopOpacity="0.3" />
            <Stop offset="100%" stopColor="#d97706" stopOpacity="0.2" />
          </LinearGradient>
        </Defs>
        <Path
          d="M0 80C0 35.817 35.817 0 80 0h190c44.183 0 80 35.817 80 80v398c0 44.183-35.817 80-80 80H80c-44.183 0-80-35.817-80-80V80z"
          fill="url(#gradient2)"
        />
        <Circle cx="100" cy="120" r="50" fill="url(#gradient2)" opacity="0.4" />
        <Circle cx="250" cy="200" r="70" fill="url(#gradient2)" opacity="0.3" />
        <Circle cx="180" cy="350" r="40" fill="url(#gradient2)" opacity="0.5" />
        <Circle cx="80" cy="450" r="35" fill="url(#gradient2)" opacity="0.4" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});