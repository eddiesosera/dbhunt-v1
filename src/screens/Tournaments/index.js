import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { deleteItem, getAllItems, getItem } from '../../util/Services/Data';
import { HuntCard } from './Sections/Card';
import { ListOfHunts } from './Sections/List';
import { HuntsDummyData } from '../../util/Services/Data/Dummy/huntsDummy';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyle } from '../../util/Style';
import { TopBar } from '../../elements/TopBar';

export const TournamentsScreen = () => {
    // General UI variables
    const navigate = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [isDeleteWarning, setIsDeleteWarning] = useState(false);
    const [selected, setSelected] = useState();
    const [isTableExpanded, setIsTableExpanded] = useState(false);
    // General UI functinos
    const updateModalState = (state) => {
        setModalVisible(state)
    };
    const expandTable = () => {
        if (isTableExpanded) {
            setIsTableExpanded(!isTableExpanded)
        } else {
            setIsTableExpanded(!isTableExpanded)
        }
    }
    const goToCreate = () => {
        navigate.navigate("HuntStack")
    }
    const onListScroll = (state) => {
        setIsTableExpanded(state)
        console.log("Scroll state: " + state)
    }

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
    };
    const openModal = (id) => {

    };

    // Lifecycles:
    useEffect(() => {
        handleGettingOfData();
        // handleSingleData();
    }, [isTableExpanded]);
    useFocusEffect(useCallback(() => {
        // handleGettingOfData()
        return () => {

        }
    }, []));

    return (
        <View style={styles.container}>
            <TopBar showOptions={true} />

            <HuntCard isMinimized={isTableExpanded} />
            <ListOfHunts
                hunts={HuntsDummyData}
                header={
                    (<View style={styles.listHeaderWrap}>
                        <View style={styles.listHeaderLeftWrap}>
                            <Text style={styles.listHeader}>Nearby Hunts</Text>
                            <View style={styles.numberOfHuntsWrap}>
                                <Text style={styles.numberOfHuntsText}> {HuntsDummyData?.length} </Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={expandTable}>
                            <Ionicons name="chevron-expand" size={24} color="black" />
                        </TouchableOpacity>
                    </View>)
                }
                cardPadding={15}
                customStyle={{ gap: 20, marginTop: 40, paddingHorizontal: 0 }}
                onScroll={onListScroll}
                getModalId={openModal}
            />
            <TouchableOpacity style={[GlobalStyle.PrimaryIconButton, styles.addButton]} onPress={goToCreate}>
                <Ionicons name="add-outline" size={30} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // gap: 40,
        // marginTop: 22,
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0,
    },
    listHeaderWrap: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingRight: 5,
    },
    listHeaderLeftWrap: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    listHeader: {
        fontFamily: 'Mona-Sans Wide Medium',
        fontSize: 16,
    },
    numberOfHuntsWrap: {
        borderRadius: 30,
        backgroundColor: '#ddd',
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberOfHuntsText: {
        fontSize: 11,
        fontFamily: 'Mona-Sans Wide Medium'
    },
    addButton: {
        position: 'absolute',
        right: 10,
        bottom: 15,
        zIndex: 1,
    }
})