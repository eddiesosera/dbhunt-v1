import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import avatar from '../../../../../assets/img/characters/belma.png';
import { FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { GlobalStyle } from '../../../../util/Style';

export const MidSection = (user) => {

    return (
        <View style={styles.container}>
            <View style={styles.midTopDeetsWrap}>
                <View style={styles.midTopDeetsTopWrap}>
                    <Image source={avatar} style={styles.midTopDeetsTopAvatar} />
                    <Text style={styles.midTopDeetsTopUsername}>
                        Jaylen
                    </Text>
                </View>

                <View style={styles.midTopDeetsBtmWrap}>
                    <View style={styles.midTopDeetsBtmItemWrap}>
                        <FontAwesome6 name="location-dot" size={20} color="black" />
                        <Text style={styles.midTopDeetsBtmItemText}>
                            Pretoria
                        </Text>
                    </View>
                    <View style={styles.midTopDeetsBtmItemWrap}>
                        <MaterialIcons name="stars" size={20} color="black" />
                        <Text style={styles.midTopDeetsBtmItemText}>
                            2 collected
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.midTopBtmWrap}>
                <View style={styles.midTopBtmCompetitionsWrap}>
                    <Text style={styles.midTopDeetsBtmItemText}>
                        Completed In
                    </Text>
                    <Text style={styles.midTopBtmCompetitionsText}>
                        2
                    </Text>
                </View>
                <View style={GlobalStyle.PrimaryFillButton}>
                    <MaterialIcons name="move-down" size={24} color="#fff" />
                    <Text style={GlobalStyle.PrimaryFillButtonText}>
                        Loot
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 20,
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },

    // Top Section
    midTopDeetsWrap: {
        alignItems: 'center',
    },
    midTopDeetsTopWrap: {
        alignItems: 'center',
        gap: 20,
    },
    midTopDeetsTopAvatar: {
        width: 150,
        height: 150,
        objectFit: 'contain'
    },
    midTopDeetsTopUsername: {
        fontFamily: 'Saiyans Sans',
        fontSize: 36
    },

    midTopDeetsBtmWrap: {
        alignItems: 'center',
        gap: 5,
        marginTop: 20
    },
    midTopDeetsBtmItemWrap: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    midTopDeetsBtmItemText: {
        fontFamily: 'Mona-Sans Wide SemiBold',
    },

    // Bottom section
    midTopBtmWrap: {
        marginTop: 40,
        gap: 10,
        width: '100%',
    },
    midTopBtmCompetitionsWrap: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFF2',
        padding: 20,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: '#D8D2C9',
    },
    midTopBtmCompetitionsText: {
        fontFamily: 'Mona-Sans Wide Bold',
    },
})