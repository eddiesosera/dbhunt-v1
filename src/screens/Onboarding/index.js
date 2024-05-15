import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export const OnboardingScreen = () => {

    const navigation = useNavigation();
    const goToScreen = () => {
        navigation.navigate('OnboardingStack', { screen: 'Login' }); // Replace 'ScreenName' with the name of the screen you want to navigate to
    };

    return (
        <View>
            <Text>Onboarding screen</Text>
            <TouchableOpacity onPress={goToScreen}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({})