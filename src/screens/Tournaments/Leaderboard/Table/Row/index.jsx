import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

export const Row = ({ img, name, collected, rank, avatars, isSelected, playerLoggedId, playerId }) => {
    const matched = playerLoggedId === playerId;
    return (
        <TouchableOpacity style={[styles.container, {
            backgroundColor: matched ? '#EBEEFF' : '#fff',
            borderWidth: matched ? 2 : 1,
            borderColor: matched ? '#5C5E66' : '#ddd',
        }]}>
            <View style={styles.userWrap}>
                <Image source={img} style={styles.userImg} />
                <Text style={[styles.userName, {
                    fontFamily: matched ? 'Mona-Sans Bold' : 'Mona-Sans Medium',
                }]}>
                    {name}{matched && ' (me)'}
                </Text>
            </View>
            <Text style={[styles.draonballsCollected, {
                fontFamily: matched ? 'Mona-Sans Bold' : 'Mona-Sans Medium',
            }]}>
                {collected} db
            </Text>
            <Text style={[styles.userRank, {
                fontFamily: matched ? 'Mona-Sans Bold' : 'Mona-Sans Medium',
            }]}>
                #{rank}
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
        borderRadius: 5,
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
        borderRadius: 5,
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