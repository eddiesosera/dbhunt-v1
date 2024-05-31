import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Logo from '../../../assets/img/logo/app_logo_bnw.png'
import { Ionicons } from '@expo/vector-icons';
import { ModalElement } from '../Modal';
import { useNavigation } from '@react-navigation/native';
import { ModalStyle } from '../../util/Style/Modal';


export const TopBar = ({ showOptions, paddingHorizontal, paddingVertical, customStyle }) => {
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

  // Default padding
  if (!paddingVertical) {
    paddingVertical = 20
  }

  return (
    <View style={[styles.container, customStyle, { paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical }]}>
      <Image source={Logo} style={styles.logoImage} />
      {
        showOptions && (
          <TouchableOpacity onPress={viewModal} style={{ marginRight: 10 }}>
            <Ionicons name='ellipsis-horizontal' size={24} color='#060612' />
          </TouchableOpacity>
        )
      }

      <ModalElement isOpened={modalVisible} setModalVisible={updateModalState}>
        <TouchableOpacity onPress={viewModal} style={ModalStyle.ModalButton}>
          <Text style={ModalStyle.ModalButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToScreen} style={ModalStyle.ModalButton}>
          <Text style={ModalStyle.ModalButtonText}>Logout</Text>
        </TouchableOpacity>
      </ModalElement>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FFFFF2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '100%'
  },
  logoImage: {
    height: 30,
    width: 65,
  }
})