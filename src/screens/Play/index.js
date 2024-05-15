import { Dimensions, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import MapsExample from './Maps';
import MapView, { Marker } from 'react-native-maps';

import dragonball from "../../../assets/icon.png"

export const PlayScreen = () => {

    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

    useEffect(() => {
        bottomSheetModalRef.current?.present();
        bottomSheetModalRef.current.snapToIndex = 0
    }, [])

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
                >
                    <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
                        <Image style={{ height: 75, width: 75, borderRadius: 50 }} source={dragonball} />
                    </Marker>
                </MapView>

            </View>
            < BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                handleComponent={null}

                // handleStyle={Handle}
                // onChange={handleSheetChanges}
                // handleComponent={Handle}
                // backgroundComponent={CustomBackground}
                // style={styles.bottomSheet}
                backgroundStyle={styles.bottomSheet}
            >
                <FilterSettingsContent />
            </ BottomSheetModal>
        </BottomSheetModalProvider >
    )
}

export const FilterSettingsContent = () => {

    const [isSheetVisible, setIsSheetVisible] = useState(true);
    const navigation = useNavigation();
    const bottomSheetModalRef = useRef(null);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
        // isSheetVisible && bottomSheetModalRef.current?.dismiss();
    }, []);

    const handleSheetChanges = useCallback((index) => {
        // console.log('handleSheetChanges', isSheetVisible);
        // index === -1 && hideGlobal('sheet')
    }, [isSheetVisible]);

    const goToScreen = () => {
        navigation.navigate('OnboardingStack', { screen: 'Login' }); // Replace 'ScreenName' with the name of the screen you want to navigate to
    };

    return (
        <>
            <Text style={styles.text}>Play</Text>
            <TouchableOpacity onPress={handlePresentModalPress}>
                <Text>Open Modal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToScreen}>
                <Text>Change Screen</Text>
            </TouchableOpacity>
        </>
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
        borderWidth: 1
    }
})