import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const LocationItem: React.FC<{ icon: string; title: string; subtitle: string }> = ({
  icon,
  title,
  subtitle,
}) => (
  <TouchableOpacity style={styles.item}>
    <View style={styles.iconContainer}>
      <Feather name={icon} size={20} color="gray" />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
);

const RecentLocations: React.FC = () => {
  return (
    <View>
      <LocationItem icon="clock" title="University of Ghana" subtitle="Valco Phase I" />
      <LocationItem icon="map-pin" title="Circle VIP Bus Terminal" subtitle="Ring Road Central, Accra" />
      <LocationItem icon="map-pin" title="Madina Zongo Junction" subtitle="Ga" />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: 'gray',
  },
});

export default RecentLocations;