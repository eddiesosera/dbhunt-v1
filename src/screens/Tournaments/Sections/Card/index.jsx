import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react';

import HuntBg from '../../../../../assets/img/background/hunt_bg.png';
import img1 from '../../../../../assets/img/characters/bardock.png';
import { Row } from '../../Leaderboard/Table/Row';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../../../util/Global';

export const HuntCard = ({ competitionId, region, customStyle, isMinimized }) => {
    const { userLoggedIn } = useContext(Context);
    const navigation = useNavigation();
    let minHeight = 150;
    // const userLoggedIn = {
    //     id: 4,
    //     avatar: img1,
    //     username: 'Huey',
    //     collected: ["", "", "", "",]
    // };

    const goToCompetition = () => {
        navigation.navigate("Leaderboard")
    }

    return (
        <TouchableOpacity
            onPress={goToCompetition}
            style={[styles.container, {
                height: isMinimized ? minHeight : 450,
                justifyContent: isMinimized ? 'center' : ''
            }]}>
            <Image source={HuntBg} style={styles.bgImage} />
            <View style={[styles.deetsWrap, { marginTop: isMinimized ? 0 : 40 }]}
            >
                <View style={styles.deetsTitleWrap}>
                    <Text style={styles.deetsTitleL}>
                       {userLoggedIn?.region?.address} {region}
                    </Text>
                    <Text style={styles.deetsTitleR}>
                    {userLoggedIn?.region?.address}Hunt
                    </Text>
                </View>
                <Text style={styles.deetsTimeLeft}>
                    3 days left | 5 dragon
                </Text>
            </View>

            <View style={{ padding: 20, position: 'absolute', bottom: 0, height: isMinimized && 0 }}>
                {
                    !isMinimized && (
                        <Row
                            img={userLoggedIn.avatar}
                            name={userLoggedIn.username}
                            collected={userLoggedIn?.collected?.length || 0}
                            rank={userLoggedIn.id}
                        />
                    )
                }

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        overflow: 'hidden',
        // height: 450,
        // padding: 20,
        width: '100%',
        alignItems: 'center',
    },
    bgImage: {
        width: '100%',
        height: 450,
        position: 'absolute',
        borderRadius: 10,
        overflow: 'hidden',
    },
    deetsWrap: {
        width: '100%',
        // marginTop: 40,
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
        color: '#FFD67D',
        fontSize: 12,
    }
})