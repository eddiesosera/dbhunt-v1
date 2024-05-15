import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Mapbox from '@rnmapbox/maps';
import { MainNavigation, Screens, TabNavigate } from './src/util/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { OnboardingStack } from './src/util/StackScreens';

// Mapbox.setAccessToken('pk.eyJ1IjoiZWRkaWVvd2kiLCJhIjoiY2x2cjZsdTI1MDV3bDJxbzlpM2Q4YmkzMyJ9.5OBJ64S7Dq7CBgNk9aHvng');

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#01010' }}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});