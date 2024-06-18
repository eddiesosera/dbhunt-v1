import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';
import logoWinner from '../../../../assets/img/logo/app_logo_winner.png';
import { GlobalStyle } from '../../../util/Style';
import { Context } from '../../../util/Global';

export const TournamentWinnerScreen = () => {
    const { userLoggedIn } = useContext(Context);

    return (
        <View style={styles.container}>
            <Image source={logoWinner} style={styles.logoWinnerImg}/>
            <Text>Winner of Tournament</Text>

            <view style={[GlobalStyle.LightOutlineButtonText]}>
                {userLoggedIn?.username}
            </view>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFB10A",
        padding: 20
    },
    logoWinnerImg: {
        height:30,
        objectFit:"fit"
    }
})