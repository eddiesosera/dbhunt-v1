import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { AccountStack, OnboardingStack, PlayStack, TournamentsStack } from '../StackScreens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTab } from './customTab';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const TabNavigate = () => {
    return (
        <Tab.Navigator tabBar={(props) => <CustomTab {...props} />} screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Play" component={PlayStack} />
            <Tab.Screen name="Tournaments" component={TournamentsStack} />
            <Tab.Screen name="Account" component={AccountStack} />
        </Tab.Navigator>
    )
}

export const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="Tabs" component={TabNavigate} />
            <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})