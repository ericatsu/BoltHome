import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PromoBanner: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>✓ 10% promo applied</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5D5FEF',
    padding: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: -15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default PromoBanner;