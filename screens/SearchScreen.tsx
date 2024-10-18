import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, StatusBar, Platform } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface LocationItem {
  id: string;
  icon: 'time-outline' | 'bus-outline' | 'cart-outline';
  title: string;
  subtitle: string;
}

const recentLocations: LocationItem[] = [
  { id: '1', icon: 'time-outline', title: 'University of Ghana', subtitle: 'Valco Phase I' },
  { id: '2', icon: 'bus-outline', title: 'Circle VIP Bus Terminal', subtitle: 'Ring Road Central, Accra' },
  { id: '3', icon: 'bus-outline', title: 'Madina Zongo Junction', subtitle: 'Ga' },
  { id: '4', icon: 'cart-outline', title: 'Accra Mall', subtitle: 'Spintex Road, Accra' },
];

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Your route</Text>
          <TouchableOpacity>
            <Feather name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.routeContainer}>
          <View style={styles.startPointContainer}>
            <Ionicons name="radio-button-on" size={24} color="#4285F4" />
            <Text style={styles.startPointText}>Department of Mathematics</Text>
          </View>
          <View style={styles.destinationInputContainer}>
            <Feather name="search" size={20} color="#666" />
            <TextInput
              placeholder="Destination"
              style={styles.input}
              placeholderTextColor="#666"
            />
            <TouchableOpacity>
              <Ionicons name="map-outline" size={20} color="#4285F4" />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={recentLocations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.locationItem}>
              <Ionicons name={item.icon} size={24} color="#666" />
              <View style={styles.locationTextContainer}>
                <Text style={styles.locationTitle}>{item.title}</Text>
                <Text style={styles.locationSubtitle}>{item.subtitle}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  routeContainer: {
    marginBottom: 20,
  },
  startPointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 0,
    zIndex: 1,
  },
  startPointText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '500',
  },
  destinationInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#4285F4',
    borderRadius: 8,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  locationTextContainer: {
    marginLeft: 16,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  locationSubtitle: {
    color: '#666',
    marginTop: 2,
  },
});

export default SearchScreen;