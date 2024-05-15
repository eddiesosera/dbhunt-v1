import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import Logo from '../../../../../assets/img/logo/app_logo_bnw.png'
import { Ionicons } from '@expo/vector-icons';
import { ModalElement } from '../../../../elements/Modal';
import { useNavigation } from '@react-navigation/native';

export const TopSection = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const updateModalState = (state) => {
        setModalVisible(state)
    };
    const viewModal = () => {
        setModalVisible(true)
    };

    const navigation = useNavigation();
    const goToScreen = () => {
        navigation.navigate('OnboardingStack', { screen: 'Onboarding' }); // Replace 'ScreenName' with the name of the screen you want to navigate to
    };

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logoImage} />
            <TouchableOpacity onPress={viewModal}>
                <Ionicons name='ellipsis-horizontal' size={24} color='#060612' />
            </TouchableOpacity>

            <ModalElement isOpened={modalVisible} setModalVisible={updateModalState}>
                <TouchableOpacity onPress={viewModal}>
                    <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToScreen}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </ModalElement>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFF2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    logoImage: {
        height: 30,
        width: 65,
    }
})