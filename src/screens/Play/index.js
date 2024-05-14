import { Dimensions, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('pk.eyJ1IjoiZWRkaWVvd2kiLCJhIjoiY2x2cjZsdTI1MDV3bDJxbzlpM2Q4YmkzMyJ9.5OBJ64S7Dq7CBgNk9aHvng');

export const PlayScreen = () => {
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const navigation = useNavigation();

    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

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
    }

    return (
        <BottomSheetModalProvider>
            <View style={styles.page}>
                <Text style={styles.text}>Play</Text>
                <TouchableOpacity onPress={handlePresentModalPress}>
                    <Text>Open Modal</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToScreen}>
                    <Text>Change Screen</Text>
                </TouchableOpacity>

                {/* MAPBOX */}
                <View style={styles.page}>
                    <View style={styles.container}>
                        <Mapbox.MapView style={styles.map} />
                    </View>
                </View>

            </View>
            < BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                // handleStyle={Handle}
                // onChange={handleSheetChanges}
                // handleComponent={Handle}
                // backgroundComponent={CustomBackground}
                style={styles.bottomSheet}
            >
                <FilterSettingsContent />
            </ BottomSheetModal>
        </BottomSheetModalProvider >
    )
}

export const FilterSettingsContent = () => {
    return (
        <Text>Bottom Sheet Content</Text>
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
        flex: 1
    },
    text: {
        marginTop: 20,
        margin: 50
    },
    bottomSheet: {

    }
})