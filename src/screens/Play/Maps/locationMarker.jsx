import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-animatable";
import { Marker } from "react-native-maps";
import { getUsertLocation } from "../../../util/Services/Map/getUserLocation";

export const LocationMarker = ({ username }) => {
  const [userLocation, setUserLocation] = useState({});

  useEffect(() => {
    const location = getUsertLocation();
    setUserLocation(location);
  }, [userLocation]);
  return (
    <Marker
      coordinate={{
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
    }}>
      <View style={styles.userWrap}>
        <Ionicons name="pin" size={18} color="black" />
        {username}
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
