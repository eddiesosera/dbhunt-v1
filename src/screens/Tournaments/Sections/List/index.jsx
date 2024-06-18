import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { HuntRowCard } from '../Card/HuntRowCard'

export const ListOfHunts = ({ hunts, getModalId, header, cardPadding, customStyle, onScroll }) => {
    const currentOffset = useRef(0);
    const handleScroll = async (event) => {
        // var currentOffset = 0;
        const newOffset = event.nativeEvent.contentOffset.y;
        const direction = newOffset > currentOffset.current ? 'down' : 'up';
        currentOffset.current = newOffset;
        // console.log(direction);

        // If I'm scrolling up the table should collapse and vice veresa
        if (direction === "down") {
            onScroll(true)
        } else if (direction == "up") {
            onScroll(false)
        }
    };

    useEffect(() => {
        // handleScroll()
    }, []);

    return (
        <View style={[styles.container, customStyle]}>
            {header}
            <FlatList
                data={hunts}
                renderItem={({ item }) => (
                    <HuntRowCard
                        id={item?.id}
                        title={item?.title}
                        startDate={item?.startDate}
                        endDate={item?.endDate}
                        padding={cardPadding}
                        sendModalId={getModalId}
                    />)}
                ItemSeparatorComponent={() => <View style={{ height: 5, width: 10 }} />}
                showsVerticalScrollIndicator={false}
                onScrollEndDrag={handleScroll}
            // onScrollEndDrag={() => alert("Scroll Ended")}
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