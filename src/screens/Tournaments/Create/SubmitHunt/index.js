import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const SubmitHuntScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Submit Tournament</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})