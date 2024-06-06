import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

export const Row = ({ img, name, collected, rank, avatars, isSelected, playerLoggedId, playerId }) => {
    const matched = playerLoggedId === playerId;
    return (
        <TouchableOpacity style={[styles.container, {
            borderWidth: matched ? 2.5 : 1,
            borderColor: matched ? '#141412' : '#ddd',
        }]}>
            <View style={styles.userWrap}>
                <Image source={img} style={styles.userImg} />
                <Text style={[styles.userName, {
                    fontFamily: matched ? 'Mona-Sans Bold' : 'Mona-Sans Medium',
                }]}>{name}
                </Text>
            </View>
            <Text style={[styles.draonballsCollected, {
                fontFamily: matched ? 'Mona-Sans Bold' : 'Mona-Sans Medium',
            }]}>
                {collected}
            </Text>
            <Text style={[styles.userRank, {
                fontFamily: matched ? 'Mona-Sans Bold' : 'Mona-Sans Medium',
            }]}>
                {rank}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#eee',
        justifyContent: 'space-between',
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
        width: '100%',
    },
    userWrap: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    userImg: {
        width: 40,
        height: 40,
        borderRadius: 40,
        borderWidth: 0.5,
        borderColor: '#ddd',
        objectFit: 'contain',
    },
    userName: {
        fontFamily: 'Mona-Sans Medium',
        fontSize: 14
    },
    draonballsCollected: {
        fontFamily: 'Mona-Sans Medium',
    },
    userRank: {
        fontFamily: 'Mona-Sans Medium',
    }
})