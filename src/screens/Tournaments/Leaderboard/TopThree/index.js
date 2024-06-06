import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const TopThree = ({ players }) => {
    return (
        <View style={styles.playerItem}>
            <Text>Plyr</Text>
            {
                players?.map((player, i) => {
                    return (
                        <View style={styles.playerItem}>
                            <View style={styles.playerImgWrap}>
                                <Image source={player?.avatar} styles={styles.playerImg} />
                            </View>
                            <Text style={styles.playerName}> {player?.name} </Text>
                        </View>
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
        gap: 20,
    },
    playerItem: {
        flexDirection: 'column',
        gap: 10,
    },
    playerImgWrap: {
        width: 110,
        height: 110,
        borderRadius: 110,
        backgroundColor: '#eee'
    },
    topPlayerImgWrap: {
        width: 110,
        height: 110,
        borderRadius: 110,
        objectFit: 'cover'
    },
    playerImg: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: '#eee'
    },
    topPlayerImg: {
        width: 90,
        height: 90,
        borderRadius: 90,
        objectFit: 'cover'
    },
    playerName: {

    }
})