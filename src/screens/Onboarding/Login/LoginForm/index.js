import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GlobalStyle } from "../../../../util/Style";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../../../util/Global";
import { Login } from "../../../../util/Auth/Services/login.service";
import { getAllItems, getItem } from "../../../../util/Services/Data";
import { matchedEntity } from "../../../../util/Services/Data/Filters/General/matchEntity";

export const LoginForm = () => {
  const navigation = useNavigation();
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(Context);
  const { userLoggedIn, setUserLoggedIn } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const goToScreen = () => {
  };

  useEffect(() => {}, [email, isUserLoggedIn]);

  const handleSubmit = async () => {
    try {
        // Await the login response
        const response = await Login(email, password, goToScreen);

        console.log("Login response: " + JSON.stringify(response))
    
        if (response) {
          // Find logged in user id
          const players = await getAllItems("players");
          const matchedPlayer = await matchedEntity(players, "email", response).match;
    
          // Set the logged in user
          setUserLoggedIn(matchedPlayer);
          console.log("Logged in player: " + JSON.stringify(matchedPlayer));
    
          // Navigate to Account
          navigation.navigate("Account", { screen: "OnboardingStack" });
        } else {
          console.error("Login failed, response is null or undefined.");
        }
      } catch (error) {
        console.error("Error during handleSubmit: ", error);
      }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login to Play</Text>
      </View>

      <View style={styles.formWrap}>
        <View style={styles.inputWrap}>
          <TextInput
            onChangeText={(value) => setEmail(value)}
            style={[styles.inputText]}
            placeholder="Email or username"
          />
        </View>
        <View style={styles.inputLogin}>
          <View style={styles.inputWrap}>
            <TextInput
              onChangeText={(value) => setPassword(value)}
              style={[styles.inputText]}
              placeholder="Password"
              secureTextEntry={showPassword}
            />
          </View>
          <TouchableOpacity style={styles.forgotPasswordWrap}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        style={GlobalStyle.PrimaryFillButton}
      >
        <Text style={GlobalStyle.PrimaryFillButtonText}>Login Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 60,
    alignItems: "center",
  },

  // Header
  header: {},
  headerText: {
    fontFamily: "Saiyans Sans",
    fontSize: 40,
    color: "#0C0700",
  },

  // Form
  formWrap: {
    gap: 10,
    width: "100%",
  },
  inputWrap: {
    padding: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#D8D2C9",
    borderRadius: 8,
    width: "100%",
  },
  inputText: {
    fontFamily: "Mona-Sans Wide SemiBold",
  },
  inputLogin: {
    gap: 5,
    width: "100%",
  },
  forgotPasswordWrap: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    fontFamily: "Mona-Sans Wide",
    fontSize: 13,
    color: "#3D58F2",
    marginRight: 10,
  },

  submitBtn: {},
});
