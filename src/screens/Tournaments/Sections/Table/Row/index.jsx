import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

export const Row = ({ img, name, collected, rank, isSelected }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.userWrap}>
                <Image source={img} style={styles.userImg} />
                <Text style={styles.userName}>{name}</Text>
            </View>
            <Text style={styles.draonballsCollected}>{collected}</Text>
            <Text style={styles.userRank}>{rank}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 20,
        width: '100%'
    },
    userWrap: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    userImg: {
        width: 30,
        height: 30,
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: '#ddd'
    },
    userName: {
        fontFamily: 'Mona-Sans Wide Medium',
        fontSize: 14
    },
    draonballsCollected: {
        fontFamily: 'Mona-Sans Wide',
    },
    userRank: {
        fontFamily: 'Mona-Sans Wide',
    }
})