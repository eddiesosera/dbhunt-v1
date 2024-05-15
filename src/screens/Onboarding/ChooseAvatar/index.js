import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export const ChooseAvatarScreen = () => {

  const navigation = useNavigation();
  const goToScreen = () => {
    navigation.navigate('Account', { screen: 'AccountStack' });
  };

  return (
    <View>
      <Text>Choose Avatar Screen</Text>
      <TouchableOpacity onPress={goToScreen}>
        <Text>Go to - Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})