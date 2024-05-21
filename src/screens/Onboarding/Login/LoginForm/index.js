import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyle } from '../../../../util/Style';
import { useNavigation } from '@react-navigation/native';

export const LoginForm = () => {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const navigation = useNavigation();
    const goToScreen = (screen) => {
        navigation.navigate('OnboardingStack', { screen: screen }); // Replace 'ScreenName' with the name of the screen you want to navigate to
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Login
                    to Play
                </Text>
            </View>

            <View style={styles.formWrap}>
                <View style={styles.inputWrap}>
                    <TextInput style={[styles.inputText]} placeholder='Enter email or username' />
                </View>
                <View style={styles.inputLogin}>
                    <View style={styles.inputWrap}>
                        <TextInput style={[styles.inputText]} placeholder='Password' secureTextEntry={showPassword} />
                    </View>
                    <TouchableOpacity style={styles.forgotPasswordWrap}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={GlobalStyle.PrimaryFillButton}>
                <Text style={GlobalStyle.PrimaryFillButtonText}>Login Account</Text>
            </TouchableOpacity>

            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "red"
        padding: 20,
        gap: 60,
        alignItems: 'center',
    },

    // Header
    header: {

    },
    headerText: {
        fontFamily: 'Saiyans Sans',
        fontSize: 40,
        color: '#0C0700',
    },

    // Form
    formWrap: {
        gap: 10,
        width: '100%',
    },
    inputWrap: {
        padding: 15,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#D8D2C9',
        borderRadius: 8,
        width: '100%'
    },
    inputText: {
        fontFamily: 'Mona-Sans Wide SemiBold',
    },
    inputLogin: {
        gap: 5,
        width: '100%',
    },
    forgotPasswordWrap: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    forgotPasswordText: {
        fontFamily: 'Mona-Sans Wide',
        fontSize: 13,
        color: '#3D58F2',
        marginRight: 10
    },

    submitBtn: {

    },
})