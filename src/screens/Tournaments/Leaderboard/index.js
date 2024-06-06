import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Table } from './Table'
import { TopThree } from './TopThree'
import { playersDummy } from '../../../util/Services/Data/Dummy/players'
import { HuntsDummyData } from '../../../util/Services/Data/Dummy/huntsDummy'
import { topThree } from '../../../util/Services/Data/Filters/Player/TopThree/getTopThree'
import { Octicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { avatarsDummy } from '../../../util/Services/Data/Dummy/avatar'

export const LeaderboardScreen = ({ navigation }) => {
    const [player, setPlayer] = useState({});
    const [players, setPlayers] = useState([]);
    const [hunt, setHunt] = useState({});
    const [avatars, setAvatars] = useState([]);
    const [topPlayers, setTopPlayers] = useState([]);

    useEffect(() => {
        // Match Player:
        setPlayer(playersDummy[5]);

        // Get Players:
        setPlayers(playersDummy);

        // Get Top Players:
        setTopPlayers(topThree(playersDummy))

        // Match Hunt:
        setHunt(HuntsDummyData);

        // Avatars:
        setAvatars(avatarsDummy)
    }, []);

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.topWrap}>
                <TouchableOpacity onPress={goBack} style={styles.topBack}>
                    <Octicons name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.topHeader}>Leaderboard</Text>
                <Text style={styles.topHuntName}>Pretoria Hunt</Text>
            </View>

            <View style={styles.playersListsWrap}>
                <TopThree topPlayers={topPlayers} playerItem={player} avatars={avatars} />
                <Table players={players} playerLogged={player} avatars={avatars} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },

    // TOP:
    topWrap: {
        paddingHorizontal: 20,
    },
    topBack: {
        paddingBottom: 20
    },
    topHeader: {
        fontFamily: "Mona-Sans Wide Bold",
        fontSize: 24,
        lineHeight: 24,
        color: "#131318"
    },
    topHuntName: {
        fontFamily: "Mona-Sans Medium",
    },

    // BOTTOM LIST:
    playersListsWrap: {
        flex: 1,
        padding: 20,
        gap: 40,
    }
})