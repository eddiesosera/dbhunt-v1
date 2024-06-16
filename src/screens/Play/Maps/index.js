import React, { useEffect } from "react";
import MapView, { Circle, Marker } from "react-native-maps";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { LocationMarker } from "./locationMarker";

const screenWidth = Dimensions.get("screen").width;

import dragonball from "../../../../assets/img/misc/dragonball.png";
import dragonballClaimed from "../../../../assets/img/misc/dragonball-claimed.png";


export const MapsComponent = ({ userLocation, dragonBallsNearby, dbPress }) => {

    useEffect(()=>{

    },[])

  return (
    <View style={styles.container}>
      {userLocation ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          // onPress={handleCloseModal}
        >
          {/* User Location marker */}
          <LocationMarker location={userLocation} label={"Cresslawn"} />

          {/* List of all the dragonballs */}
          {dragonBallsNearby.map((coord, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: coord.region.latitude,
                  longitude: coord.region.longitude,
                }}
                onPress={(e) => {
                  console.log("CLICKED", e.nativeEvent.coordinate.latitude);
                  dbPress(coord);
                }}
              >
                <Image
                  style={{ height: 75, width: 75, borderRadius: 50 }}
                  source={!coord.claimed ? dragonball : dragonballClaimed}
                />
              </Marker>
            );
          })}

          {/* Circle Highlighting Area */}
          <Circle
            center={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            radius={1000}
            fillColor="rgba(255, 177, 10, 0.2)"
            strokeColor="rgba(255, 177, 10, 0.8)"
            strokeWidth={2}
          />
        </MapView>
      ) : (
        <Text style={styles.topRightUsername}>Loading maps...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: screenWidth,
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  topRightUsername: {
    fontFamily: "Mona-Sans Wide Medium",
    fontSize: 12,
  },
});
