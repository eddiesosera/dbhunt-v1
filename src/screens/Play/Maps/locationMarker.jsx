import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { Marker } from "react-native-maps";
import { getUsertLocation } from "../../../util/Services/Map/getUserLocation";

export const LocationMarker = ({ username, location, label, coordinate }) => {
  useEffect(() => {
    if (location.latitude) {
      // console.log("User location: " + JSON.stringify(location));
    }
  }, []);

  return (
    <Marker
      coordinate={{
        latitude: location?.latitude,
        longitude: location?.longitude,
      }}
      onPress={e=>alert("Clicked")}
    >
      <TouchableOpacity style={styles.userWrap}>
        <Ionicons name="pin" size={21} color="#fff" />
        <Text style={styles.userText}>{label}</Text>
      </TouchableOpacity>
    </Marker>
  );
};

const styles = StyleSheet.create({
  userWrap: {
    backgroundColor: "#111",
    padding: 10,
    flexDirection: "row",
    alignItems:'center',
    borderRadius: 10,
    gap:3,
    borderWidth: 1,
    borderColor:'#eee',
    paddingRight:13,
  },
  userText:{
    fontFamily: "Mona-Sans Wide Medium",
    fontSize:16,
    color:'#fff'
  }
});
