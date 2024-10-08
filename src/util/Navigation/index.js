import { StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { AccountStack, Hunt, HuntsStack, OnboardingStack, PlayStack } from '../StackScreens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTab } from './customTab';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';
import { Context } from '../Global';
import { NavigationContainer } from '@react-navigation/native';
import { config } from '../Services/firebase';
import { PlayScreen } from '../../screens/Play';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const MainNavigation = () => {
    const { userEmail, setUserEmail } = useContext(Context);
    const { isUserLoggedIn, setIsUserLoggedIn } = useContext(Context);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(config, (user) => {
            if (user) {
                setIsUserLoggedIn(true)
                console.log("User logged in: " + user.email);
            } else {
                setIsUserLoggedIn(false)
                console.log("No user logged in");
            }
        })
        return unsubscribe;
    }, [userEmail]);

    return (
        <NavigationContainer>
            {
                 isUserLoggedIn === true
                    ? (
                        <Stack.Navigator screenOptions={{ headerShown: false }} options={{ tabBarVisible: false }}>
                            <Stack.Screen name="Tabs" component={TabNavigate} />
                            <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
                            <Stack.Screen name="HuntStack" component={Hunt} />
                            <Stack.Screen name="PlayScreen" component={PlayScreen} />
                        </Stack.Navigator>
                    )
                    : (
                        <Stack.Navigator screenOptions={{ headerShown: false }} options={{ tabBarVisible: false }}>
                            <Stack.Screen name="Tabs" component={TabNavigate} />
                            <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
                            <Stack.Screen name="HuntStack" component={Hunt} />
                            <Stack.Screen name="PlayScreen" component={PlayScreen} />
                        </Stack.Navigator>
                    )
            }
        </NavigationContainer>
    );

};

export const TabNavigate = () => {
    return (
        <Tab.Navigator initialRouteName='Hunts'
            tabBar={(props) => <CustomTab {...props} />}
            screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Hunts" component={HuntsStack} />
            <Tab.Screen name="Play" component={PlayStack} />
            <Tab.Screen name="Account" component={AccountStack} />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'transparent',
        position: 'absolute',
        borderTopWidth: 0,
    },
})