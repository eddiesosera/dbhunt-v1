import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Row } from './Row';

import img1 from '../../../../../assets/img/characters/bardock.png';
import img2 from '../../../../../assets/img/characters/bardock.png';
import img3 from '../../../../../assets/img/characters/bardock.png';
import img4 from '../../../../../assets/img/characters/bardock.png';
import img5 from '../../../../../assets/img/characters/bardock.png';


export const Table = (usersInHunt) => {
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

    const sortedUsers = usersDummy.sort((a, b) => b.collected.length - a.collected.length);

    return (
        <View style={styles.container}>
            {/* <Text>index</Text> */}
            <FlatList
                data={sortedUsers}
                renderItem={({ item }) => (
                    <Row
                        img={item.avatar}
                        name={item.username}
                        collected={item.collected.length}
                        rank={item.id + 1} />
                )}
                ItemSeparatorComponent={() => <View style={{ height: 5, width: 10 }} />}
                style={styles.rankList}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    rankList: {
        // padding: 20
    }
})