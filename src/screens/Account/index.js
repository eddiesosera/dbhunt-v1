import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { TopSection } from './Sections/Top';
import { MidSection } from './Sections/Mid';
import { BottomSection } from './Sections/Btm';

export const AccountScreen = () => {
    return (
        <View>
            <StatusBar />
            <TopSection />
            <MidSection />
            <BottomSection />
        </View>
    )
}

const styles = StyleSheet.create({})