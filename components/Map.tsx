import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Map: React.FC = () => {
  return (
    <Image
      source={{ uri: 'https://yellow.co.nz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle-maps-background.2575fb51.png&w=3840&q=75' }}
      style={styles.map}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,  
  },
});

export default Map;
