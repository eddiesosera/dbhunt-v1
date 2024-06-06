import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Row } from './Row';
import { matchedEntity } from '../../../../util/Services/Data/Filters/General/matchEntity';

export const Table = ({ players, playerLogged, avatars }) => {
    // Players excluding the top 3
    const sortedPlayers = players?.sort((a, b) => b.dragonballs.length - a.dragonballs.length).slice(3);

    return (
        <View style={styles.container}>
            <FlatList
                data={sortedPlayers}
                renderItem={({ item, index }) => {
                    return (
                        <Row
                            avatars={avatars}
                            img={matchedEntity(avatars, "id", item.avatar)?.match.image}
                            name={item.username}
                            collected={item.dragonballs.length}
                            rank={index + 3}
                            playerLoggedId={playerLogged.id}
                            playerId={item.id}
                        />
                    )
                }
                }
                ItemSeparatorComponent={() => <View style={{ height: 5, width: 10 }} />}
                style={styles.rankList}
                scrollEnabled
                showsVerticalScrollIndicator={false}
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