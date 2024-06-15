import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native-animatable";
import { Marker } from "react-native-maps";
import { getUsertLocation } from "../../../util/Services/Map/getUserLocation";

export const LocationMarker = ({ username,location }) => {

  useEffect(() => {

   if(location.latitude){
    // console.log("User location: " + JSON.stringify(location));
   }
  }, []);

  return (
    <Marker
      coordinate={{
        latitude: location?.latitude,
        longitude: location?.longitude,
    }}>
      <View style={styles.userWrap}>
        <Ionicons name="pin" size={18} color="black" />
        <Text>Username</Text>
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  userWrap: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    flexDirection: "column",
  },
});
