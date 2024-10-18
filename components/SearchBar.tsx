import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SearchBar: React.FC = () => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.iconContainer}>
          <Feather name="search" size={20} color="#666" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Where to?"
          placeholderTextColor="#666"
          editable={false} 
        />
      </View>
      <TouchableOpacity style={styles.scheduleButton}>
        <Ionicons name="calendar-outline" size={20} color="#28BB78" />
        <Text style={styles.scheduleText}>Schedule</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
    marginBottom: 16,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  iconContainer: {
    backgroundColor: 'lightgray',  
    borderRadius: 20, 
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  scheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  scheduleText: {
    marginLeft: 4,
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
});

export default SearchBar;