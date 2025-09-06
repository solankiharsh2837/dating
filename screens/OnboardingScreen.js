import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const onboardingData = [
  {
    key: '1',
    title: "Start the game",
    description: "Upload your photo and get ready for your night adventure.",
    image: require('../assets/onboarding1.png'), // Placeholder image path
  },
  {
    key: '2',
    title: "Anonymously playing",
    description: "Hurry up. You'll have an hour to look a partner and one more hour to arrange a meeting.",
    image: require('../assets/onboarding2.png'),
  },
  {
    key: '3',
    title: "Get ready to enjoy",
    description: "Meet and enjoy yourselves with pleasure. Without continuing.",
    image: require('../assets/onboarding3.png'),
  },
];

export default function OnboardingScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('GenderSelection');
    }
  };

  const handleSkip = () => {
    navigation.navigate('GenderSelection');
  };

  return (
    <View style={styles.container}>
      <Image source={onboardingData[currentIndex].image} style={styles.image} />
      <Text style={styles.title}>{onboardingData[currentIndex].title}</Text>
      <Text style={styles.description}>{onboardingData[currentIndex].description}</Text>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skip}>SKIP</Text>
        </TouchableOpacity>
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : null,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.next}>{currentIndex === onboardingData.length - 1 ? 'DONE' : 'NEXT'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.6,
    height: width * 0.6,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 40,
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skip: {
    fontSize: 16,
    color: '#888',
  },
  next: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});
