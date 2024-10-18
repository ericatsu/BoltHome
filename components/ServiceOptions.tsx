import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import boltFoodImage from '../assets/food.png';
import boltSendImage from '../assets/send.png';

const ServiceOption: React.FC<{ icon: any; title: string; subtitle: string }> = ({
  icon,
  title,
  subtitle,
}) => (
  <TouchableOpacity style={styles.option}>
    <Image source={icon} style={styles.icon} />
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
);

const ServiceOptions: React.FC = () => {
  return (
    <View style={styles.container}>
      <ServiceOption
        icon={boltFoodImage} 
        title="Bolt Food"
        subtitle="Fast delivery"
      />
      <ServiceOption
        icon={boltSendImage}
        title="Bolt Send"
        subtitle="Parcel delivery"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    flex: 1,
    marginRight: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: 'gray',
  },
});

export default ServiceOptions;
