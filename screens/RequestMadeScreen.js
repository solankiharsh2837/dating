import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function RequestMadeScreen({ navigation }) {
  const handleDeleteRequest = () => {
    // Placeholder for delete request logic
    alert('Request deleted');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YOUR REQUEST IS MADE</Text>
      <Text style={styles.subtitle}>You have an hour to find a date</Text>
      <Image
        source={require('../assets/request_made_photo.jpg')} // Placeholder image path
        style={styles.photo}
      />
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteRequest}>
        <Text style={styles.deleteButtonText}>DELETE REQUEST</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.requestSettings} onPress={() => alert('Request Settings')}>
        <Text style={styles.requestSettingsText}>Request Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 40,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  deleteButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  requestSettings: {
    marginTop: 10,
  },
  requestSettingsText: {
    color: '#0000ff',
    textDecorationLine: 'underline',
  },
});
