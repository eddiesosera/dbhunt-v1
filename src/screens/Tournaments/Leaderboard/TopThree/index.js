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
                    const img = matchedEntity(avatars, "id", player.avatar)?.match?.image
                    return (
                        i === 1 ? (
                            <TouchableOpacity key={player.id} style={[styles.playerItem, {
                                zIndex: matched ? 2 : 1,
                            }]}>
                                <View style={[styles.topPlayerImgWrap, {
                                    borderWidth: matched ? 2 : 1,
                                    borderColor: matched ? '#141412' : '#ddd',
                                }]}>
                                    <Image source={img} style={styles.topPlayerImg} />
                                </View>
                                <Text style={[styles.topPlayerName, { marginBottom: -3 }]}>
                                    {i === 1 && (i + " ")}
                                </Text>
                                <Text style={[styles.topPlayerName, {
                                    fontFamily: matched ? 'Mona-Sans Bold' : 'Mona-Sans Medium'
                                }]}>
                                    {player?.username}
                                    {matched && " (me)"}
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity key={player.id} style={[styles.playerItem, {
                                marginLeft: i === 2 && -20,
                                marginRight: i === 0 && -20,
                                marginTop: 20,
                                zIndex: matched ? 2 : 0,
                            }]}>
                                <View style={[styles.playerImgWrap, {
                                    borderWidth: matched ? 2 : 1,
                                    borderColor: matched ? '#141412' : '#ddd',
                                }]}>
                                    <Image source={img} style={styles.playerImg} />
                                </View>
                                <Text style={[styles.playerName, { marginBottom: -3 }]}>
                                    {i === 0 && (i + 2 + " ")}
                                    {i === 2 && (i + 1 + " ")}
                                </Text>
                                <Text style={[styles.playerName, {
                                    fontFamily: matched ? 'Mona-Sans Bold' : 'Mona-Sans Medium',
                                }]}>
                                    {/* Labelling 0 in the index as 2, as the array is sorted based on ui */}
                                    {player?.username}
                                    {matched && " (me)"}
                                </Text>
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
        gap: 5,
        alignItems: 'center',
        overflow: 'hidden',
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
        width: 150,
        height: 150,
        borderRadius: 150,
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
        width: 150,
        height: 150,
        borderRadius: 150,
        objectFit: 'contain'
    },
    playerName: {
        fontFamily: 'Mona-Sans Wide Medium',
        fontSize: 12,
    },
    topPlayerName: {
        fontFamily: 'Mona-Sans Wide SemiBold',
        fontSize: 14
    },
})