import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Table } from './Table'

export const LeaderboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Leaderboard</Text>
            <Table />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})