import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { GlobalStyle } from "../../../../util/Style";
import { useNavigation } from "@react-navigation/native";
import { Register } from "../../../../util/Auth/Services/register.service";
import { Context } from "../../../../util/Global";

export const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(Context);

  const navigation = useNavigation();
  const goToScreen = (screen) => {
    navigation.navigate("OnboardingStack", { screen: screen });
  };

  const goToChooseAvatar = (userId) => {
    navigation.navigate("ChooseAvatar", {
      screen: "OnboardinStack",
      data: {
        userId: userId,
      },
    });
    setIsUserLoggedIn(true)
  };

  const handleRegister = () => {
    Register(email, username, password, goToChooseAvatar);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Register to Compete</Text>
      </View>

      <View style={styles.formWrap}>
        <View style={styles.inputWrap}>
          <TextInput
            style={[styles.inputText]}
            placeholder="Username"
            onChangeText={(value) => setUsername(value)}
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            style={[styles.inputText]}
            placeholder="Email address"
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            style={[styles.inputText]}
            placeholder="Password"
            secureTextEntry={showPassword}
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            style={[styles.inputText]}
            placeholder="Retry Password"
            secureTextEntry={showPassword}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={handleRegister}
        style={GlobalStyle.PrimaryFillButton}
      >
        <Text style={GlobalStyle.PrimaryFillButtonText}>Register Account</Text>
      </TouchableOpacity>

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "red"
    padding: 20,
    gap: 40,
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
    gap: 10,
    width: "100%",
  },
  forgotPasswordWrap: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    fontFamily: "Mona-Sans Wide SemiBold",
    fontSize: 12,
    color: "#3D58F2",
    marginRight: 20,
  },

  submitBtn: {},
});
