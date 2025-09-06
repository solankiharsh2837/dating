import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default function GenderSelectionScreen({ navigation }) {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleNext = () => {
    if (selectedGender) {
      navigation.navigate('LocationPermission');
    } else {
      alert('Please select a gender to continue');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SELECT YOUR GENDER</Text>
      <TouchableOpacity
        style={[
          styles.option,
          selectedGender === 'male' ? styles.selectedOption : null,
        ]}
        onPress={() => setSelectedGender('male')}
      >
        <Text style={styles.optionText}>MALE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.option,
          selectedGender === 'female' ? styles.selectedOption : null,
        ]}
        onPress={() => setSelectedGender('female')}
      >
        <Text style={styles.optionText}>FEMALE</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text>03/05</Text>
        <Button title="NEXT STEP" onPress={handleNext} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  option: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  selectedOption: {
    backgroundColor: '#000',
  },
  optionText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
