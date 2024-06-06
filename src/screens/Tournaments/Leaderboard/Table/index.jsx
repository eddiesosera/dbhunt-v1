import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';

import img1 from '../../../../../assets/img/characters/bardock.png';
import img2 from '../../../../../assets/img/characters/bardock.png';
import img3 from '../../../../../assets/img/characters/bardock.png';
import img4 from '../../../../../assets/img/characters/bardock.png';
import img5 from '../../../../../assets/img/characters/bardock.png';
import { Row } from './Row';


export const Table = ({ players }) => {
    const usersDummy = [
        {
            id: 0,
            avatar: img1,
            username: 'John',
            collected: ["", "",]
        },
        {
            id: 1,
            avatar: img2,
            username: 'Jaylen',
            collected: ["", "", "", "", "", ""]
        },
        {
            id: 2,
            avatar: img3,
            username: 'James',
            collected: ["",]
        },
        {
            id: 3,
            avatar: img4,
            username: 'Riley',
            collected: ["", "", "", "", "", "", "", ""]
        },
        {
            id: 4,
            avatar: img5,
            username: 'Huey',
            collected: ["", "", "", "",]
        }
    ];

    // Players excluding the top 3
    const sortedPlayers = players?.slice(3).sort((a, b) => b.dragonballs.length - a.dragonballs.length);

    return (
        <View style={styles.container}>
            {/* <Text>index</Text> */}
            <FlatList
                data={sortedPlayers}
                renderItem={({ item, index }) => (
                    <Row
                        img={item.avatar}
                        name={item.username}
                        collected={item.dragonballs.length}
                        rank={index + 3} />
                )}
                ItemSeparatorComponent={() => <View style={{ height: 5, width: 10 }} />}
                style={styles.rankList}
                scrollEnabled
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rankList: {

    }
})