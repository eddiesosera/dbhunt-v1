import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { LoginForm } from './LoginForm';

import dragonBalls from '../../../../assets/img/misc/screens/onboarding/dbTopImg.png';
import logo from '../../../../assets/img/logo/app_logo_bnw.png'

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export const LoginScreen = () => {

  const navigation = useNavigation();
  const goToScreen = (screen, stack) => {
    navigation.navigate(stack, { screen: screen }); // Replace 'ScreenName' with the name of the screen you want to navigate to
  };

  return (
    <View style={styles.container}>
      {/* <Text>Login Screen</Text> */}

      <View style={styles.topWrap}>
        <Image source={dragonBalls} style={styles.dbImg} />
      </View>
      <View style={styles.midWrap}>
        <LoginForm />
      </View>

      <View style={styles.btmWrap}>
        <View style={styles.createAccountWrap}>
          <Text style={styles.createAccountText}>Don't have an account yet?</Text>
          <Text onPress={() => { goToScreen('Register', 'OnboardingStack') }}
            style={[styles.createAccountText, styles.createAccountNavText]}>
            Register</Text>
        </View>
        <Image source={logo} style={styles.logo} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FFF9F0',
  },

  // Top Section
  topWrap: {
    // width: screenWidth,
  },
  dbImg: {
    objectFit: 'cover',
    width: screenWidth,
    height: 150,
  },

  // Mid Section
  midWrap: {

  },

  // Bottom Section
  btmWrap: {
    padding: 20,
    marginBottom: 20,
    gap: 20,
    alignItems: 'center',
  },
  logo: {
    width: 75,
    height: 34.25,
    // aspectRatio: 1 / 1,
  },
  createAccountWrap: {
    flexDirection: 'row',
    gap: 5
  },
  createAccountText: {
    fontFamily: 'Mona-Sans Wide SemiBold'
  },
  createAccountNavText: {
    color: '#3D58F2',
    fontFamily: 'Mona-Sans Wide Bold',
  }
})

{/* <TouchableOpacity onPress={() => { goToScreen('Register', 'OnboardingStack') }}>
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { goToScreen('AccountStack', 'Account',) }}>
        <Text>Account</Text>
</TouchableOpacity> */}