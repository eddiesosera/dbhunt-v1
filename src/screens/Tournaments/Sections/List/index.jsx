import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { HuntRowCard } from '../Card/HuntRowCard'

export const ListOfHunts = ({ hunts, getModalId, header, cardPadding, customStyle }) => {
    useEffect(() => {
        // console.log(hunts)
    }, [])
    return (
        <View style={[styles.container, customStyle]}>
            {header}
            <FlatList
                data={hunts}
                renderItem={({ item }) => (
                    <HuntRowCard
                        id={item.id}
                        title={item.title}
                        startDate={item.startDate}
                        endDate={item.endDate}
                        padding={cardPadding}
                        sendModalId={getModalId}
                    />)}
                ItemSeparatorComponent={() => <View style={{ height: 5, width: 10 }} />}
                showsVerticalScrollIndicator={false}
            // horizontal={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})