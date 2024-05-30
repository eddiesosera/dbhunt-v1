import { Image, StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react';

import HuntBg from '../../../../../assets/img/background/hunt_bg.png';
import img1 from '../../../../../assets/img/characters/bardock.png';
import { Row } from '../Table/Row';

export const HuntCard = ({ region, }) => {
    const userLoggedIn = {
        id: 4,
        avatar: img1,
        username: 'Huey',
        collected: ["", "", "", "",]
    }
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={HuntBg} style={styles.bgImage} />
            <View style={styles.deetsWrap}>
                <View style={styles.deetsTitleWrap}>
                    <Text style={styles.deetsTitleL}>
                        Pretoria {region}
                    </Text>
                    <Text style={styles.deetsTitleR}>
                        Hunt
                    </Text>
                </View>
                <Text style={styles.deetsTimeLeft}>
                    3 days left | 5 dragon
                </Text>
            </View>

            <View style={{ padding: 20, position: 'absolute', bottom: 0 }}>
                <Row
                    img={userLoggedIn.avatar}
                    name={userLoggedIn.username}
                    collected={userLoggedIn.collected.length}
                    rank={userLoggedIn.id}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        overflow: 'hidden',
        height: 300,
        // padding: 20,
        width: '100%'
    },
    bgImage: {
        width: '100%',
        height: 300,
        position: 'absolute',
        borderRadius: 10,
        overflow: 'hidden',
    },
    deetsWrap: {
        width: '100%',
        marginTop: 40,
        alignItems: 'center',
        gap: 5,
    },
    deetsTitleWrap: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deetsTitleL: {
        fontFamily: 'Mona-Sans Wide Bold',
        textTransform: 'capitalize',
        color: '#fff',
        fontSize: 24,
    },
    deetsTitleR: {
        fontFamily: 'Mona-Sans Wide',
        textTransform: 'capitalize',
        color: '#fff',
        fontSize: 24,
    },
    deetsTimeLeft: {
        fontFamily: 'Mona-Sans Wide',
        color: 'yellow',
        fontSize: 12,
    }
})