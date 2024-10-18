import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Map from '../components/Map';
import PromoBanner from '../components/PromoBanner';
import SearchBar from '../components/SearchBar';
import ServiceOptions from '../components/ServiceOptions';
import RecentLocations from '../components/RecentLocations';
import MapNavigationButton from '../components/MapNavigationButton';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Map style={StyleSheet.absoluteFillObject} />
      <Header />
      <View style={styles.contentWrapper}>
        <PromoBanner />
        <View style={styles.foreground}>
          <SearchBar />
          <ServiceOptions />
          <RecentLocations />
        </View>
      </View>
      <MapNavigationButton style={styles.navigationButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  contentWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  foreground: {
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navigationButton: {
    position: 'absolute',
    bottom: 395, 
    right: 20,
    zIndex: 3,
  },
});

export default HomeScreen;