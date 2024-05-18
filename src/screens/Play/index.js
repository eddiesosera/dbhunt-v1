import { Dimensions, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import MapsExample from './Maps';
import MapView, { Marker } from 'react-native-maps';

import dragonball from "../../../assets/img/misc/dragonball.png";
import { GlobalStyle } from '../../util/Style';
import { Ionicons } from '@expo/vector-icons';

const screenHeight = Dimensions.get("screen").height;

export const PlayScreen = () => {
    const [isDragonballActive, setIsDragonballActive] = useState(false);
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, [])
    const handleOnAnimate = () => {
        bottomSheetModalRef.current?.snapToIndex(0);
    };

    useEffect(() => {
        // bottomSheetModalRef.current?.present();
    }, [isDragonballActive]);

    return (
        <BottomSheetModalProvider>
            <View style={styles.page}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    onPress={(e) => {
                        console.log("CLICKED", e.latitude);
                        handlePresentModalPress();
                        setIsDragonballActive(!isDragonballActive)
                    }}
                >
                    <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
                        <Image style={{ height: 75, width: 75, borderRadius: 50 }} source={dragonball} />
                    </Marker>
                </MapView>

            </View>
            < BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={['30%']}
                handleComponent={null}
                onAnimate={handleOnAnimate}
                animatedIndex={0}
                animateOnMount={false}
                // handleStyle={Handle}
                // onChange={handleSheetChanges}
                // handleComponent={Handle}
                // backgroundComponent={CustomBackground}
                // style={styles.bottomSheet}
                backgroundStyle={styles.bottomSheet}
            >
                <FilterSettingsContent isDragonballActive={isDragonballActive} />
            </ BottomSheetModal>
        </BottomSheetModalProvider >
    )
}

export const FilterSettingsContent = ({ isDragonballActive }) => {
    const [isSheetVisible, setIsSheetVisible] = useState(true);
    const navigation = useNavigation();
    const bottomSheetModalRef = useRef(null);

    const handleSheetChanges = useCallback((index) => {
        // console.log('handleSheetChanges', isSheetVisible);
    }, [isSheetVisible]);
    const goToScreen = () => {
        navigation.navigate('OnboardingStack', { screen: 'Login' }); // Replace 'ScreenName' with the name of the screen you want to navigate to
    };

    useEffect(() => {

    }, [isDragonballActive])

    return (
        <View style={styles.dragonballSheet}>
            {/* <TouchableOpacity onPress={handlePresentModalPress}>
                <Text>Open Modal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToScreen}>
                <Text>Change Screen</Text>
            </TouchableOpacity> */}
            {
                isDragonballActive ? (
                    <View style={styles.selectedDBWrap}>
                        <View style={styles.selectedDBContent}>
                            <Image source={dragonball} style={styles.selectedDBImg} />
                            <View style={styles.selectedRightDB}>

                                <Text style={styles.selectedRightDBTitle}>Dragonball</Text>

                                <View style={styles.selectedRightBtm}>
                                    <View style={styles.selectedRightBtmItem}>
                                        <Ionicons name="pin" size={18} color="black" />
                                        <Text style={styles.selectedRightBtmItemText}>DB-12-P</Text>
                                    </View>
                                    <View style={styles.selectedRightBtmItem}>
                                        <Ionicons name="star" size={18} color="black" />
                                        <Text style={styles.selectedRightBtmItemText}>3 stars</Text>
                                    </View>
                                    <View style={styles.selectedRightBtmItem}>
                                        <Ionicons name="person-outline" size={18} color="black" />
                                        <Text style={styles.selectedRightBtmItemText}>Claimed by Eddie</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={GlobalStyle.PrimaryFillButton}>
                            <Text style={GlobalStyle.PrimaryFillButtonText}>Collect Dragonballs</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.selectDBWrap}>
                        <View style={styles.noDBSelectedTextWrap}>
                            <Text style={styles.noDBSelectedText}>No Dragonball Selected</Text>
                        </View>
                        <TouchableOpacity style={GlobalStyle.PrimaryFillButton}>
                            <Text style={GlobalStyle.PrimaryFillButtonText}>Find Dragonballs</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    container: {
        height: 300,
        width: 300,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    text: {
        marginTop: 20,
        margin: 50
    },
    bottomSheet: {
        borderColor: "#D7D7D7",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },
    dragonballSheet: {
        // flex: 1,
        flexDirection: 'column',
        gap: 20,
        height: screenHeight * 0.3 - 35,
        padding: 20
    },
    selectedDBWrap: {
        flex: 1,
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'flex-end',
        // backgroundColor: 'red'
    },
    selectedDBContent: {
        flex: 1,
        flexDirection: 'row',
        gap: 20,
        // backgroundColor: 'red'
    },
    selectedDBImg: {
        height: 10,
        width: 120,
        aspectRatio: 1 / 1
    },
    selectedRightDB: {
        flex: 1,
        flexDirection: 'column',
        gap: 10,
        justifyContent: 'center',
        // backgroundColor: 'yellow'
    },
    selectedRightDBTitle: {
        fontSize: 20
    },
    selectedRightBtm: {
        flex: 1,
        flexDirection: 'column',
        gap: 2,
    },
    selectedRightBtmItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        gap: 5,
    },
    selectedRightBtmItemText: {
        fontSize: 14
    },

    // When No Dragonball is selected
    selectDBWrap: {
        flex: 1,
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'flex-end'
    },
    noDBSelectedTextWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F4FF',
        borderRadius: 10
    },
    noDBSelectedText: {
        fontSize: 20,
        color: '#595967'
    }
})