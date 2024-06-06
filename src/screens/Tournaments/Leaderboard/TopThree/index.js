import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { matchedEntity } from '../../../../util/Services/Data/Filters/General/matchEntity'

export const TopThree = ({ topPlayers, playerItem, avatars }) => {

    useEffect(() => {
    }, [])

    return (
        <View style={styles.wrap}>
            {/* <Text>Plyr</Text> */}
            {
                topPlayers?.map((player, i) => {
                    const matched = player.id === playerItem.id;
                    const img = matchedEntity(avatars, "id", player.avatar)?.match.image
                    return (
                        i === 1 ? (
                            <TouchableOpacity key={player.id} style={[styles.playerItem, { zIndex: 1, }]}>
                                <View style={[styles.topPlayerImgWrap, {
                                    borderWidth: matched ? 4 : 1,
                                    borderColor: matched ? '#141412' : '#ddd',
                                }]}>
                                    <Image source={img} style={styles.topPlayerImg} />
                                </View>
                                <Text style={[styles.topPlayerName, {
                                    fontFamily: matched ? 'Mona-Sans Wide Bold' : 'Mona-Sans Wide Medium'
                                }]}>
                                    {player?.username}
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity key={player.id} style={[styles.playerItem, {
                                marginLeft: i === 2 && -20,
                                marginRight: i === 0 && -20,
                                marginTop: 20,
                            }]}>
                                <View style={[styles.playerImgWrap, {
                                    borderWidth: matched ? 4 : 1,
                                    borderColor: matched ? '#141412' : '#ddd',
                                }]}>
                                    <Image source={img} style={styles.playerImg} />
                                </View>
                                <Text style={[styles.playerName, {
                                    fontFamily: matched ? 'Mona-Sans ExtraBold' : 'Mona-Sans Medium',
                                }]}> {player?.username} </Text>
                            </TouchableOpacity>
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
        // gap: 20,
        width: '100%'
    },
    playerItem: {
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
        // position: 'absolute',
    },
    playerImgWrap: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: '#fff',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topPlayerImgWrap: {
        width: 130,
        height: 130,
        borderRadius: 130,
        backgroundColor: '#fff',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    playerImg: {
        width: 90,
        height: 90,
        borderRadius: 90,
        objectFit: 'contain'
    },
    topPlayerImg: {
        width: 130,
        height: 130,
        borderRadius: 130,
        objectFit: 'contain'
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