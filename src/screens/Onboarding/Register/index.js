import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import dragonBalls from '../../../../assets/img/misc/screens/onboarding/dbTopImg.png';
import logo from '../../../../assets/img/logo/app_logo_bnw.png'
import { RegisterForm } from './RegisterForm';

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export const RegisterScreen = () => {

  const navigation = useNavigation();
  const goToScreen = (screen) => {
    navigation.navigate('OnboardingStack', { screen: screen }); // Replace 'ScreenName' with the name of the screen you want to navigate to
  };

  return (
    <View style={styles.container}>

      <View style={styles.topWrap}>
        <Image source={dragonBalls} style={styles.dbImg} />
      </View>
      <View style={styles.midWrap}>
        <RegisterForm />
      </View>

      <View style={styles.btmWrap}>
        <View style={styles.LoginWrap}>
          <Text style={styles.LoginText}>Don't have an account yet?</Text>
          <Text onPress={() => { goToScreen('Login', 'OnboardingStack') }}
            style={[styles.createAccountText, styles.LoginNavText]}>
            Login
          </Text>
        </View>
        <Image source={logo} style={styles.logo} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: screenHeight,
    // gap: 20,
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
    marginBottom: 40,
    gap: 20,
    alignItems: 'center',
  },
  logo: {
    width: 75,
    height: 34.25,
    // aspectRatio: 1 / 1,
  },
  LoginWrap: {
    flexDirection: 'row',
    gap: 5
  },
  LoginText: {
    fontFamily: 'Mona-Sans Wide'
  },
  LoginNavText: {
    color: '#3D58F2',
    fontFamily: 'Mona-Sans Wide SemiBold',
  }
})