import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Logo from '../../../../../assets/img/logo/app_logo_bnw.png'
import { Ionicons } from '@expo/vector-icons';

export const TopSection = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoImage} />
            <Ionicons name='ellipsis-horizontal' size={24} color='#060612' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFF2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    logoImage: {
        height: 30,
        width: 65,
    }
})