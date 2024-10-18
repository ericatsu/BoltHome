import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface MapNavigationButtonProps {
  style?: ViewStyle;
}

const MapNavigationButton: React.FC<MapNavigationButtonProps> = ({ style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Feather name="navigation" size={24} color="#000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default MapNavigationButton;