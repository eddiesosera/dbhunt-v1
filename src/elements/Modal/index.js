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
            animationType="fade" visible={isOpened} hasBackdrop={true} onBackdropPress={bdPress} backdropColor="red"
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        // width: 300,
        // backgroundColor: 'red'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
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