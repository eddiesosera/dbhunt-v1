import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const TournamentWinnerScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Winner of Tournament</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})