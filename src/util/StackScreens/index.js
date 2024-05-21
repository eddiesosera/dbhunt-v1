import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { PlayScreen } from '../../screens/Play';
import { InfoTournamentScreen } from '../../screens/Tournaments/Create/InfoTournament';
import { PlaceBallsTournamentScreen } from '../../screens/Tournaments/Create/PlaceBallsTournament';
import { SubmitTournamentScreen } from '../../screens/Tournaments/Create/SubmitTournament';
import { LeaderboardScreen } from '../../screens/Tournaments/Leaderboard';
import { EditAccountScreen } from '../../screens/Account/Stack/EditAccount';
import { TournamentWinnerScreen } from '../../screens/Tournaments/Winner';
import { TournamentsScreen } from '../../screens/Tournaments';
import { AccountScreen } from '../../screens/Account';
import { OnboardingScreen } from '../../screens/Onboarding';
import { LoginScreen } from '../../screens/Onboarding/Login';
import { RegisterScreen } from '../../screens/Onboarding/Register';
import { ChooseAvatarScreen } from '../../screens/Onboarding/ChooseAvatar';
import MapsExample from '../../screens/Play/Maps';

const Stack = createStackNavigator();

export const PlayStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="PlayStack" component={PlayScreen} />
      {/* <Stack.Screen name="TournamentsStack" component={MapsExample} /> */}
    </Stack.Navigator>
  )
};

export const TournamentsStack = () => {
  return (
    <Stack.Navigator initialRouteName="TournamentsStack" screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="TournamentsStack" component={TournamentsScreen} />
      <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Stack.Screen name="TournamentWinner" component={TournamentWinnerScreen} />
      <Stack.Group initialRouteName="CreateTournamentsStack">
        <Stack.Screen name="CreateTournamentsStack" component={InfoTournamentScreen} />
        <Stack.Screen name="PlaceBalls" component={PlaceBallsTournamentScreen} />
        <Stack.Screen name="SubmitTournament" component={SubmitTournamentScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
};

export const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="AccountStack" screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="AccountStack" component={AccountScreen} />
      <Stack.Screen name="EditAccount" component={EditAccountScreen} />
    </Stack.Navigator>
  )
};

export const OnboardingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ChooseAvatar" component={ChooseAvatarScreen} />
    </Stack.Navigator>
  )
};


const styles = StyleSheet.create({})