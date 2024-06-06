import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const TopThree = ({ players }) => {
    return (
        <View style={styles.wrap}>
            {/* <Text>Plyr</Text> */}
            {
                players?.map((player, i) => {
                    return (
                        i === 1 ? (
                            <View style={styles.playerItem}>
                                <View style={styles.topPlayerImgWrap}>
                                    <Image source={player?.avatar} styles={styles.topPlayerImg} />
                                </View>
                                <Text style={styles.topPlayerName}> {player?.username} </Text>
                            </View>
                        ) : (
                            <View style={styles.playerItem}>
                                <View style={styles.playerImgWrap}>
                                    <Image source={player?.avatar} styles={styles.playerImg} />
                                </View>
                                <Text style={styles.playerName}> {player?.username} </Text>
                            </View>
                        )
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flexDirection: 'row',
        // justifyContent:'space-between',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        width: '100%'
    },
    playerItem: {
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center'
    },
    playerImgWrap: {
        width: 80,
        height: 80,
        borderRadius: 80,
        backgroundColor: '#eee',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topPlayerImgWrap: {
        width: 120,
        height: 120,
        borderRadius: 120,
        objectFit: 'cover',
        backgroundColor: '#ddd',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    playerImg: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },
    topPlayerImg: {
        width: 120,
        height: 120,
        borderRadius: 120,
        objectFit: 'cover'
    },
    playerName: {
        fontFamily: 'Mona-Sans Wide Medium',
        fontSize: 12
    },
    topPlayerName: {
        fontFamily: 'Mona-Sans Wide SemiBold',
        fontSize: 14
    },
})