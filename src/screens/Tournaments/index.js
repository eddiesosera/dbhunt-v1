import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import React, { useState } from 'react';
import { ModalElement } from '../../elements/Modal';
import MapsExample from '../Play/Maps';

export const TournamentsScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const updateModalState = (state) => {
        setModalVisible(state)
    };

    return (
        <View style={styles.centeredView}>

            <ModalElement isOpened={modalVisible} setModalVisible={updateModalState}>
                <Text>Extra content</Text>
            </ModalElement>

            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal: {modalVisible}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})