import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { MainNavigation, Screens, TabNavigate } from './src/util/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LoadFonts } from './assets/fonts';
import { onAuthStateChanged } from 'firebase/auth';
import { Context, GlobalProvider } from './src/util/Global';
import { config } from './src/util/Services/firebase';
import { StatusBar } from 'expo-status-bar';

import loaderImg from './assets/img/background/loading.png';

const screenWidth = Dimensions.get("screen").width;

const App = () => {
  // const { isUserLoggedIn, setIsUserLoggedIn } = useContext(Context);
  const [isFontLoaded, setIsFontsLoaded] = useState(false);
  const getFontsLoadedState = (state) => {
    setIsFontsLoaded(state)
  };

  useEffect(() => {
    LoadFonts(getFontsLoadedState)
  }, [isFontLoaded]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(config, (user) => {
      // if (user) {
      //   setIsUserLoggedIn(true)
      //   console.log("User logged in: " + user.email);
      //   initScreen = 'Profile';
      // } else {
      //   setIsUserLoggedIn(false)
      //   console.log("No user logged in");
      //   initScreen = 'Login';
      // }
    })
    return unsubscribe
  }, [])

  return (
    <GlobalProvider>
      {/* <StatusBar translucent={true} /> */}
      {isFontLoaded ?
        (<GestureHandlerRootView style={{ flex: 1, backgroundColor: '#01010' }}>
          <MainNavigation />
        </GestureHandlerRootView>) :
        <View style={styles.container}>
          <LoaderScreen/>
        </View>}
    </GlobalProvider>
  );
}

export default App;

const LoaderScreen = ()=>{

  return(
    <View style={styles.loaderWrap}>
      <Image source={loaderImg} style={styles.loaderImg}/>
      <Text style={styles.loaderText}>Loading...</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderWrap:{
    flex:1,
    width:screenWidth,
    justifyContent:'center',
    alignItems:'center',
    gap: 20
  },
  loaderImg:{
    width:200,
    height:200,
    objectFit:'contain'
  },
  loaderText:{
    fontFamily:'Mona-Sans Wide Bold',
    color:'#aaa'
  }
});