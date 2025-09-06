import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const profiles = [
  {
    id: '1',
    name: 'Jane',
    distance: '2 km',
    image: require('../assets/profile1.jpg'), // Placeholder image path
  },
  {
    id: '2',
    name: 'Anna',
    distance: '3 km',
    image: require('../assets/profile2.jpg'),
  },
];

export default function ProfileBrowsingScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.distance}>{item.distance}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>♥</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={profiles}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  distance: {
    color: '#888',
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 30,
    width: 50,
    alignItems: 'center',
  },
  actionText: {
    fontSize: 18,
  },
});
