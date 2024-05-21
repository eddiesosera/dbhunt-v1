import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Mapbox from '@rnmapbox/maps';
import { MainNavigation, Screens, TabNavigate } from './src/util/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LoadFonts } from './assets/fonts';

// Mapbox.setAccessToken('pk.eyJ1IjoiZWRkaWVvd2kiLCJhIjoiY2x2cjZsdTI1MDV3bDJxbzlpM2Q4YmkzMyJ9.5OBJ64S7Dq7CBgNk9aHvng');

const App = () => {

  const [isFontLoaded, setIsFontsLoaded] = useState(false);
  const getFontsLoadedState = (state) => {
    setIsFontsLoaded(state)
  };

  useEffect(() => {
    LoadFonts(getFontsLoadedState)
  }, [isFontLoaded]);

  return (
    isFontLoaded ?
      (<GestureHandlerRootView style={{ flex: 1, backgroundColor: '#01010' }}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>) :
      <View style={styles.container}>
        <Text> Loading...</Text>
      </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});