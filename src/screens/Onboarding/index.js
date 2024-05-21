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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 40,
        flexDirection: 'column',
        justifyContent: 'space-between'
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
        fontFamily: 'Mona-Sans Wide'
    },
    createAccountNavText: {
        color: '#3D58F2',
        fontFamily: 'Mona-Sans Wide SemiBold',
    }
})