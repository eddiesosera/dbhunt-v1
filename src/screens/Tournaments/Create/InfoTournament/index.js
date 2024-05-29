import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { createItem } from '../../../../util/Services/Data'

export const InfoTournamentScreen = () => {
    const [title, setTitle] = useState('')
    const [region, setRegion] = useState('')
    const [reward, setReward] = useState('Super Saiyan 1')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigation()

    const handleCreation = async () => {
        var items = { title, startDate, endDate, description, reward }
        var success = await createItem("hunts", items);

        if (success) {
            navigate.goBack() //if it wass successful, go back home
        } else {

        }
    }

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.inputField}
                placeholder="Hunt Title"
                onChangeText={newText => setTitle(newText)}
                defaultValue={title}
            />

            <TextInput
                style={styles.inputField}
                placeholder="Start Date"
                onChangeText={newText => setStartDate(newText)}
                defaultValue={startDate}
            />

            <TextInput
                style={styles.inputField}
                placeholder="End Date"
                onChangeText={newText => setEndDate(newText)}
                defaultValue={endDate}
            />

            <TextInput
                multiline
                numberOfLines={4}
                style={styles.inputField}
                placeholder="Description of Hunt"
                onChangeText={newText => setDescription(newText)}
                defaultValue={description}
            />

            <TouchableOpacity style={styles.button} onPress={handleCreation}>
                <Text style={styles.buttonText}>Create Hunt</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    inputField: {
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 15,
        padding: 10
    },
    button: {
        backgroundColor: "green",
        textAlign: 'center',
        padding: 15,
        marginTop: 30
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    },
    switch: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: 10,
    }
})