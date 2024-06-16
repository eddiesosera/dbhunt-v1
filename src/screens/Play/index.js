import {
  Dimensions,
  Image,
  NativeModules,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import MapsExample from "./Maps";
import MapView, { Circle, Marker, Polygon } from "react-native-maps";

import dragonball from "../../../assets/img/misc/dragonball.png";
import { GlobalStyle } from "../../util/Style";
import { Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { LocationMarker } from "./Maps/locationMarker";
import { getUsertLocation } from "../../util/Services/Map/getUserLocation";
import { calculateCircleCoordinates } from "../../util/Services/Map/radiusCoordinates";
import { generateRandomCoordinates } from "../../util/Services/Map/randomCoordinates";

const screenHeight = Dimensions.get("screen").height;
const { StatusBarManager } = NativeModules;

export const PlayScreen = () => {
  const navigation = useNavigation();
  const [statusBar, setStatusBar] = useState(0);

  //   Maps var
  const [userLocation, setUserLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [dragonBallsNearby, setDragonBallsNearby] = useState([]);

  // UI
  const [isDragonballActive, setIsDragonballActive] = useState(true);
  const bottomSheetModalRef = useRef(null);
  // BOTTOM SHEET VARIABLES
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleOnAnimate = () => {
    bottomSheetModalRef.current?.snapToIndex(0);
  };

  const redirect = () => {
    navigation.navigate("PlayScreen");
  };
  const goBack = () => {
    navigation.navigate("Hunts");
  };

  useFocusEffect(
    useCallback(() => {
      // redirect();

      if (Platform.OS === "ios") {
        StatusBarManager.getHeight((height) => {
          setStatusBar(height.height);
        });
      } else {
        // resolve(StatusBarManager.HEIGHT);
        setStatusBar(StatusBarManager.HEIGHT);
        // console.log("Height: " + StatusBarManager.HEIGHT);
      }
    })
  );

  useEffect(() => {
    // bottomSheetModalRef.current?.present();
    const fetchLocation = async () => {
      const location = await getUsertLocation();
      setUserLocation(location);

      // Generate random coordinates around the user location
      const radius = 1000; // Radius in meters
      const numPoints = 10; // Number of random points
      const randomCoords = generateRandomCoordinates(
        location,
        radius,
        numPoints
      );
      setDragonBallsNearby(randomCoords);

      console.log("User location (parent): " + userLocation);
      console.log("Nearby dragons: " + JSON.stringify(dragonBallsNearby));
    };

    fetchLocation();
  }, [isDragonballActive]);

  return (
    <BottomSheetModalProvider>
      <StatusBar translucent />
      <View style={styles.page}>
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
            // onRegionChangeComplete={}
          >
           
            <LocationMarker location={userLocation} />

            {dragonBallsNearby.map((coord, index) => {
              return (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: coord.latitude,
                    longitude: coord.longitude,
                  }}
                >
                  <Image
                    style={{ height: 75, width: 75, borderRadius: 50 }}
                    source={dragonball}
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

        <View style={[styles.topWrap, { top: statusBar }]}>
          {/* TOP WRAP: LEFT */}
          <TouchableOpacity style={styles.topBackButton} onPress={goBack}>
            <Octicons name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          {/* TOP WRAP:RIGHT */}
          <View style={styles.topRight}>
            <View style={styles.topRightItem}>
              <Text style={styles.topRightHunt}>Pretoria Hunt</Text>
              <View style={styles.innertextwrap}>
                <Feather name="users" size={14} color="black" />
                <Text style={[styles.topRightUsername, { marginLeft: 5 }]}>
                  1
                </Text>
              </View>
            </View>
            <View
              style={[styles.topRightItem, { gap: 3, alignItems: "flex-end" }]}
            >
              <Text style={styles.topRightUsername}>Eddie</Text>
            </View>
          </View>
        </View>
      </View>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={["32%"]}
        enablePanDownToClose
        handleComponent={null}
        onAnimate={handleOnAnimate}
        animatedIndex={0}
        animateOnMount={false}
        // handleStyle={Handle}
        // onChange={handleSheetChanges}
        // handleComponent={Handle}
        // backgroundComponent={CustomBackground}
        // style={styles.bottomSheet}
        backgroundStyle={styles.bottomSheet}
      >
        <FilterSettingsContent isDragonballActive={isDragonballActive} />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export const FilterSettingsContent = ({ isDragonballActive }) => {
  const [isSheetVisible, setIsSheetVisible] = useState(true);
  const navigation = useNavigation();
  const bottomSheetModalRef = useRef(null);

  const handleSheetChanges = useCallback(
    (index) => {
      // console.log('handleSheetChanges', isSheetVisible);
    },
    [isSheetVisible]
  );
  const goToScreen = () => {
    navigation.navigate("OnboardingStack", { screen: "Login" }); // Replace 'ScreenName' with the name of the screen you want to navigate to
  };

  useEffect(() => {}, [isDragonballActive]);

  return (
    <View style={styles.dragonballSheet}>
      {isDragonballActive ? (
        <View style={styles.selectedDBWrap}>
          <View style={styles.selectedDBContent}>
            <Image source={dragonball} style={styles.selectedDBImg} />
            <View style={styles.selectedRightDB}>
              <Text style={styles.selectedRightDBTitle}>Dragonball</Text>
              <View style={styles.selectedRightBtm}>
                {/* <View style={styles.selectedRightBtmItem}>
                  <Ionicons name="pin" size={18} color="black" />
                  <Text style={styles.selectedRightBtmItemText}>DB-12-P</Text>
                </View> */}
                <View style={styles.selectedRightBtmItem}>
                  <Ionicons name="star" size={18} color="#999" />
                  <Text style={styles.selectedRightBtmItemText}>3 stars</Text>
                </View>
                <View style={styles.selectedRightBtmItem}>
                  <Ionicons name="person" size={18} color="#999" />
                  <Text style={styles.selectedRightBtmItemText}>
                    Claimed by Eddie
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity style={GlobalStyle.PrimaryFillButton}>
            <Text style={GlobalStyle.PrimaryFillButtonText}>
              Collect Dragonballs
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.selectDBWrap}>
          <View style={styles.noDBSelectedTextWrap}>
            <Text style={[styles.noDBSelectedText, styles.text]}>
              No Dragonball Selected
            </Text>
          </View>
          <TouchableOpacity style={GlobalStyle.PrimaryFillButton}>
            <Text style={[GlobalStyle.PrimaryFillButtonText]}>
              Find Dragonballs
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "Mona-Sans Wide",
  },
  bottomSheet: {
    borderColor: "#D7D7D7",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  dragonballSheet: {
    // flex: 1,
    flexDirection: "column",
    gap: 20,
    height: screenHeight * 0.32 - 35,
    padding: 20,
  },

  // Top wrap interaction:
  topWrap: {
    position: "absolute",
    top: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
    // backgroundColor: '#ddd',
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  topBackButton: {
    backgroundColor: "#fff",
    // padding: 15,
    borderRadius: 100,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: -5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
  },
  topRight: {
    gap: 5,
  },
  topRightItem: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "auto",
    flexShrink: 1,
    alignSelf: "flex-end",
    gap: 10,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: -5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
  },
  topRightHunt: {
    fontFamily: "Mona-Sans Wide Bold",
  },
  topRightUsername: {
    fontFamily: "Mona-Sans Wide Medium",
    fontSize: 12,
  },
  innertextwrap: {
    flexDirection: "row",
  },

  // When Dragonball is selected:
  selectedDBWrap: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
    // justifyContent: "flex-end",
  },
  selectedDBContent: {
    // flex: 1,
    flexDirection: "row",
    gap: 40,
  },
  selectedDBImg: {
    height: 10,
    width: 120,
    aspectRatio: 1 / 1,
  },
  selectedRightDB: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: 'yellow',
    gap: 10,
  },
  selectedRightDBTitle: {
    fontSize: 20,
    fontFamily: "Mona-Sans Wide Bold",
  },
  selectedRightBtm: {
    // flex: 1,
    flexDirection: "column",
    gap: 5,
  },
  selectedRightBtmItem: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    // backgroundColor:'red'
  },
  selectedRightBtmItemText: {
    fontFamily: "Mona-Sans Wide",
    fontSize: 13,
  },

  // When No Dragonball is selected:
  selectDBWrap: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
    justifyContent: "flex-end",
  },
  noDBSelectedTextWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F4FF",
    borderRadius: 10,
  },
  noDBSelectedText: {
    fontSize: 20,
    color: "#595967",
  },
});
