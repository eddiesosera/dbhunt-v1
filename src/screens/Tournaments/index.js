import { Alert, Modal, StyleSheet, Text, Pressable, View, Touchable, TouchableOpacity, FlatList } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { ModalElement } from '../../elements/Modal';
import MapsExample from '../Play/Maps';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { deleteItem, getAllItems, getItem } from '../../util/Services/Data';
import { ModalStyle } from '../../util/Style/Modal';
import { StatusBar } from 'expo-status-bar';
import { HuntCard } from './Sections/Card';
import { Table } from './Sections/Table';

export const TournamentsScreen = () => {
    // General UI variables
    const navigate = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [isDeleteWarning, setIsDeleteWarning] = useState(false);
    const [selected, setSelected] = useState()
    // General UI functinos
    const updateModalState = (state) => {
        setModalVisible(state)
    };

    // Data variables:
    const [hunts, setHunts] = useState([]);
    const [userHunt, setUserHunt] = useState({});
    // Data functions:
    const handleGettingOfData = async () => {
        var allData = await getAllItems("hunts");
        setHunts(allData)
        console.log("All Items: " + JSON.stringify(hunts))
        console.log("ID: " + hunts[0].id)

        // If all documents are loaded:
        if (hunts) {
            var singleData = await getItem("hunts", hunts[0].id);
            setUserHunt(singleData);
            console.log("User's hunts" + userHunt)
        } else {
            console.log("Single doc not found" + userHunt)
        }
    };
    const handleDelete = async () => {
        var id_demo = "e16pEtswL1ffnMUbCkou"
        var success = await deleteItem("hunts", id_demo)

        if (success) {
            setIsDeleteWarning(false)
        } else {
            // setIsDeleteWarning(false)
            console.log("Failed delete")
        }
    }

    // Lifecycles:
    useEffect(() => {
        handleGettingOfData();
        // handleSingleData();
    }, []);
    useFocusEffect(useCallback(() => {
        // handleGettingOfData()
        return () => {

        }
    }, []))

    return (
        <View style={styles.container}>

            <View style={styles.topWrap}>
                <View style={styles.labelsWrap}>
                    <Text style={styles.labelTop}>
                        Hunts
                    </Text>
                    <Text style={styles.labelBtm}>
                        Current
                    </Text>
                </View>
                <HuntCard />
            </View>

            <View style={styles.btmWrap}>
                <View style={styles.btmLabelsWrap}>
                    <Text style={styles.btmLabelL}>Nearby</Text>
            <View style={styles.btmLabelR}>
                    <Text  style={styles.btmLabelRText}>1</Text>
                    </View>
                </View>
                <Table />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 22
    },
    topWrap: {
        marginTop: 20,
        paddingHorizontal: 20,
        width: '100%',
    },
    labelsWrap: {
        width: '100%',
        alignItems: 'center',
        gap: 20,
        marginBottom:10,
    },
    labelTop: {
        fontFamily: 'Saiyans Sans',
        fontSize: 48
    },
    labelBtm: {
        fontFamily: 'Mona-Sans Wide Medium',
        fontSize: 16
    },

    btmWrap: {
        marginTop:20,
        padding: 20,
        gap:20
    },
    btmLabelsWrap: {
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
    },
    btmLabelL:{
        fontFamily: 'Mona-Sans Wide SemiBold',
    },
    btmLabelR:{
backgroundColor:'#ddd',
borderRadius:30,
height:20,
width:20,
justifyContent:'center',
alignItems:'center'
    },
    btmLabelRText:{
        color:'#111',
        fontFamily: 'Mona-Sans Wide SemiBold',
        fontSize:11
            },
})