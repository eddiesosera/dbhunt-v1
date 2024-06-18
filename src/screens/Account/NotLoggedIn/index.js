import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GlobalStyle } from "../../../util/Style";
import { useNavigation } from "@react-navigation/native";

export const NotLoggedIn = ({ label }) => {
  const navigation = useNavigation();
  const goToScreen = () => {
    navigation.navigate("OnboardingStack", { screen: "Onboarding" }); // Replace 'ScreenName' with the name of the screen you want to navigate to
  };

  return (
    <View style={styles.logInWrap}>
      <Text style={[GlobalStyle.LightOutlineButtonText]}>
        {label ? label : "Join the Hunt"}
      </Text>

      <View style={styles.loginButtonWrap}>
        <TouchableOpacity
          style={[GlobalStyle.PrimaryFillButton, styles.loginButton]}
          onPress={goToScreen}
        >
          <Text style={[GlobalStyle.PrimaryFillButtonText]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[GlobalStyle.LightOutlineButton, styles.loginButton]}
          onPress={goToScreen}
        >
          <Text style={[GlobalStyle.LightOutlineButtonText]}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   When user is not logged in
  logInWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  loginButtonWrap: {
    flexDirection: "column",
    gap: 10,
  },
  loginButton: {
    paddingHorizontal: 40,
    // backgroundColor: "#fff",
    // width: '100%',
    // alignItems:'center',
    // justifyContent:"center"
  },
});
