import { Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Mapbox, { Camera, MapView, MarkerView, PointAnnotation, ShapeSource, SymbolLayer } from '@rnmapbox/maps';

import dragonballIcon from '../../../assets/img/dragonball.png';
import axios from 'axios';

const token = 'pk.eyJ1IjoiZWRkaWVvd2kiLCJhIjoiY2x2cjZsdTI1MDV3bDJxbzlpM2Q4YmkzMyJ9.5OBJ64S7Dq7CBgNk9aHvng'

const AnnotationContent = ({ id, icon, title, location }) => {

    return (
        <View style={styles.touchableContainer}>

            <TouchableOpacity style={styles.touchable} onPress={() => { alert('My Location: ' + location) }}>
                {
                    !title && <Image source={icon} style={{ height: 80, width: 80, objectFit: 'cover' }} />
                }
                {/* <Image source={icon} style={{ height: 80, width: 80, objectFit: 'cover' }} /> */}
                {
                    title && <Text style={[styles.touchableText, { color: '#000' }]} >{title}</Text>
                }

            </TouchableOpacity>
        </View>
    )
};
const INITIAL_COORDINATES = [
    [-73.99155, 40.73581],
    [-73.99155, 40.73681],
];

export default function Map() {
    const [DBIcon, setDBIcon] = useState('../assets/img/dragonball.png');

    useEffect(() => {
        axios
            .get(`https://api.mapbox.com/geocoding/v6/mapbox.places/Los%20Angeles.json?access_token=${token}`)
            .then((res) => {
                console.log(res.request._response)
            })
    }, [])

    useEffect(() => {
        setDBIcon(dragonballIcon);
        setTimeout(() => {
            setDBIcon(dragonballIcon);
        }, 1000);
    }, [DBIcon])

    const [pointList, setPointList] = useState(INITIAL_COORDINATES);
    const [allowOverlapWithPuck, setAllowOverlapWithPuck] = useState(false);

    const onPressMap = (e) => {
        const geometry = e?.geometry;
        setPointList((pl) => [...pl, geometry?.coordinates]);
        alert(geometry?.coordinates)
        console.log(e)
    };

    return (
        <View style={styles.container}>

            <MapView
                onPress={onPressMap}
                style={styles.matchParent}
                logoEnabled={false}
                scaleBarEnabled={false}
                styleURL='mapbox://styles/mapbox/navigation-preview-day-v4'
            >
                <Camera
                    defaultSettings={{
                        zoomLevel: 16,
                        centerCoordinate: pointList[0],
                        animationMode: 'flyTo',
                        followUserMode: true
                    }}
                />

                <Mapbox.PointAnnotation
                    coordinate={pointList[0]}
                    id={`pt-ann`}
                    key={`pt-ann`}
                >
                    <AnnotationContent title={'Static. Intended for Symbols or notes'} icon={DBIcon} />
                </Mapbox.PointAnnotation>

                {/* Array of Points (dragonballs) */}
                {pointList.slice(1).map((coordinate, index) => (

                    <MarkerView MarkerView
                        id={`pt-ann-${index + 1}`}
                        key={`pt-ann-${index + 1}`}
                        coordinate={coordinate}
                        allowOverlapWithPuck={allowOverlapWithPuck}
                    >
                        <AnnotationContent id={index} icon={DBIcon} location={coordinate} />
                    </MarkerView>

                ))}

            </MapView>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: 600,
        width: Dimensions.get('screen').width - 40,
        borderRadius: 20,
        overflow: 'hidden',
    },
    map: {
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
    },
    touchableContainer: {
        backgroundColor: 'white',
        borderColor: '#aaa',
        borderWidth: 1.0,
        // width: 100,
        // padding: 2,
        borderRadius: 200,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        // elevation: 20
    },
    touchable: {
        // backgroundColor: 'blue',
        // width: 80,
        // height: 40,
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableText: {
        // color: 'white',
        fontWeight: 'bold',
        padding: 20
    },
    matchParent: {
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
        marginTop: 20,
        borderColor: '#aaa',
        borderWidth: 1,
    },
})