import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainNavigation, Screens, TabNavigate } from './src/util/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LoadFonts } from './assets/fonts';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/util/Auth';
import { GlobalProvider } from './src/util/Global';

const App = () => {

  const [isFontLoaded, setIsFontsLoaded] = useState(false);
  const getFontsLoadedState = (state) => {
    setIsFontsLoaded(state)
  };

  useEffect(() => {
    LoadFonts(getFontsLoadedState)
  }, [isFontLoaded]);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
        console.log("User logged in: " + user.email);
        initScreen = 'Profile';
      } else {
        setLoggedIn(false)
        console.log("No user logged in");
        initScreen = 'Login';
      }
    })
    return unsubscribe
  }, [])

  return (
    <GlobalProvider>
      {isFontLoaded ?
        (<GestureHandlerRootView style={{ flex: 1, backgroundColor: '#01010' }}>
          <MainNavigation />
        </GestureHandlerRootView>) :
        <View style={styles.container}>
          <Text> Loading...</Text>
        </View>}
    </GlobalProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});