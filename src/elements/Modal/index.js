import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal'

export const ModalElement = ({ children, isOpened, setModalVisible }) => {

    useEffect(() => {
    }, [isOpened]);

    const bdPress = () => {
        setModalVisible(!isOpened);
    }

    return (
        <Modal
            animationType="fade"
            visible={isOpened}
            // hasBackdrop={true}
            backdropColor="#333"
            backdropOpacity={0.5}
            onBackdropPress={bdPress}
            style={styles.container}
            onRequestClose={() => { setModalVisible(!isOpened); }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0c0c0c2e',
        width: '100.05%',
        left: -20,
        top: -40
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 40
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 200
    },
    buttonClose: {
        backgroundColor: '#2196F3',
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