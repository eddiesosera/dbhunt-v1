import { StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import { AccountStack, OnboardingStack, PlayStack, TournamentsStack } from '../StackScreens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTab } from './customTab';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';
import { Context } from '../Global';
import { auth } from '../Auth';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const MainNavigation = () => {
    const { userEmail, setUserEmail } = useContext(Context);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)
                console.log("User logged in: " + user.email);
            } else {
                setLoggedIn(false)
                console.log("No user logged in");
            }
        })
        return unsubscribe;
    }, [userEmail]);

    return (
        <NavigationContainer>
            {
                userEmail !== ""
                    ? (
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="Tabs" component={TabNavigate} />
                            <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
                        </Stack.Navigator>
                    )
                    : (
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
                            <Stack.Screen name="Tabs" component={TabNavigate} />
                        </Stack.Navigator>
                    )
            }
        </NavigationContainer>
    );

};

export const TabNavigate = () => {
    return (
        <Tab.Navigator initialRouteName='Play'
            tabBar={(props) => <CustomTab {...props} />}
            screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Fixture" component={TournamentsStack} />
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