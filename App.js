import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './screens/OnboardingScreen';
import GenderSelectionScreen from './screens/GenderSelectionScreen';
import LocationPermissionScreen from './screens/LocationPermissionScreen';
import RequestMadeScreen from './screens/RequestMadeScreen';
import ProfileBrowsingScreen from './screens/ProfileBrowsingScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="GenderSelection" component={GenderSelectionScreen} />
        <Stack.Screen name="LocationPermission" component={LocationPermissionScreen} />
        <Stack.Screen name="RequestMade" component={RequestMadeScreen} />
        <Stack.Screen name="ProfileBrowsing" component={ProfileBrowsingScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
