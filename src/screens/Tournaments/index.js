import { Alert, Modal, StyleSheet, Text, Pressable, View, Touchable, TouchableOpacity, FlatList } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { ModalElement } from '../../elements/Modal';
import MapsExample from '../Play/Maps';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getAllItems } from '../../util/Services/Data';

export const TournamentsScreen = () => {
    const navigate = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const updateModalState = (state) => {
        setModalVisible(state)
    };

    const [hunts, setHunts] = useState([])

    useEffect(() => {
        handleGettingOfData()
    }, []);

    const handleGettingOfData = async () => {
        var allData = await getAllItems("hunts");
        setHunts(allData)
        console.log("All Items: " + JSON.stringify(hunts))
        // return handleGettingOfData
    }

    useFocusEffect(useCallback(() => {
        // handleGettingOfData()
        return () => {

        }
    }, []))

    return (
        <View style={styles.centeredView}>

            <ModalElement isOpened={modalVisible} setModalVisible={updateModalState}>
                <Text>Extra content</Text>
                <TouchableOpacity onPress={() => {
                    navigate.navigate("CreateTournamentsStack")
                }}>
                    <Text>Create</Text>
                </TouchableOpacity>
            </ModalElement>

            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => { setModalVisible(true); }}>
                <Text style={styles.textStyle}>Show Modal: {modalVisible}</Text>
            </Pressable>

            <FlatList
                data={hunts}
                renderItem={({ item }) =>
                (<TouchableOpacity style={styles.card}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>)}

                // Render when array is empty
                ListEmptyComponent={() => (
                    <TouchableOpacity>
                        <Text>
                            No tasks yet
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            // ItemSeparatorComponent={() => <View style={{ height: 10, width: 10 }} />}
            // refreshControl={
            //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            // }
            />
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
        marginTop: 50,
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