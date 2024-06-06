import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Table } from './Table'
import { TopThree } from './TopThree'
import { playersDummy } from '../../../util/Services/Data/Dummy/players'
import { HuntsDummyData } from '../../../util/Services/Data/Dummy/huntsDummy'
import { topThree } from '../../../util/Services/Data/Filters/Player/TopThree/getTopThree'

export const LeaderboardScreen = () => {
    const [player, setPlayer] = useState();
    const [players, setPlayers] = useState([]);
    const [hunt, setHunt] = useState();
    const [topPlayers, setTopPlayers] = useState();

    useEffect(() => {
        // Match Player:
        setPlayer(playersDummy[0]);

        // Get Players:
        setPlayers(playersDummy);

        // Get Top Players:
        setTopPlayers(topThree(playersDummy))

        // Match Hunt:
        setHunt(HuntsDummyData);
    }, []);

    return (
        <View style={styles.container}>
            <Text>Leaderboard</Text>
            <View style={styles.playersListsWrap}>
                <TopThree players={topPlayers} />
                <Table players={players} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
    playersListsWrap: {
        flex: 1,
        padding: 20,
        gap: 20,
    }
})