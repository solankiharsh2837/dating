import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function LocationPermissionScreen({ navigation }) {
  const handleTurnOnLocation = () => {
    // Placeholder for location permission logic
    navigation.navigate('RequestMade');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TURN ON YOUR LOCATION SETTINGS</Text>
      <Text style={styles.subtitle}>No location - no exciting adventures</Text>
      <View style={styles.iconPlaceholder}>
        {/* Placeholder for location icon */}
        <Text style={styles.iconText}>📍</Text>
      </View>
      <Button title="TURN ON LOCATION" onPress={handleTurnOnLocation} />
      <Text style={styles.footerText}>04/05</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  iconPlaceholder: {
    marginBottom: 30,
  },
  iconText: {
    fontSize: 50,
  },
  footerText: {
    marginTop: 40,
    fontSize: 14,
    color: '#888',
  },
});
