import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export const RegisterScreen = () => {

  const navigation = useNavigation();
  const goToScreen = (screen) => {
    navigation.navigate('OnboardingStack', { screen: screen }); // Replace 'ScreenName' with the name of the screen you want to navigate to
  };

  return (
    <View>
      <Text>Register</Text>
      <TouchableOpacity onPress={() => { goToScreen('ChooseAvatar') }}>
        <Text>Choose Avatar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { goToScreen('Login') }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})