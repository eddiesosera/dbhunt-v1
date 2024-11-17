import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import DBHuntLogo from "../../../assets/img/logo/app_logo_color.png";

export const WinningScreen = ({ route }) => {
  const { winner } = route.params;

  const WinnerInnerComponent = () => {
    return (
      <View>
        <Image source={winner?.avatar} alt="Winner's avatar" />
        <Text style={styles?.username}>
          `${winner.name} won with ${winner.dragonballs.length} Dragon Balls!`
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={DBHuntLogo} alt="DBHunt logo" />
      <Text style={styles.winnerText}>
        {winner ? <WinnerInnerComponent /> : "No winner found"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  winnerText: {
    fontSize: 18,
  },
});
