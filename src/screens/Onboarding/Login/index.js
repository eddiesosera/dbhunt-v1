import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {

  const navigation = useNavigation();
  const goToScreen = (screen, stack) => {
    navigation.navigate(stack, { screen: screen }); // Replace 'ScreenName' with the name of the screen you want to navigate to
  };

  return (
    <View>
      <Text>Login Screen</Text>

      <TouchableOpacity onPress={() => { goToScreen('Register', 'OnboardingStack') }}>
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { goToScreen('AccountStack', 'Account',) }}>
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})