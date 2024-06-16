import {
  Image,
  NativeModules,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { MapsComponent } from "./Maps";

import { GlobalStyle } from "../../util/Style";
import { Feather, Octicons } from "@expo/vector-icons";
import { getUsertLocation } from "../../util/Services/Map/getUserLocation";
import { calculateCircleCoordinates } from "../../util/Services/Map/radiusCoordinates";
import { generateRandomCoordinates } from "../../util/Services/Map/randomCoordinates";
import { DragonballContent } from "./Components/DragonballContent";
import { dragonballsDummy } from "../../util/Services/Data/Dummy/dragonballs";
import { Context } from "../../util/Global";

const { StatusBarManager } = NativeModules;

export const PlayScreen = () => {
    const { userLoggedIn} = useContext(Context);
  const navigation = useNavigation();
  const [statusBar, setStatusBar] = useState(0);

  //   Maps var
  const [userLocation, setUserLocation] = useState(null);
  const [dragonBallsNearby, setDragonBallsNearby] = useState([]);
  const [activeDragonball, setActiveDragonball] = useState({});

  // UI
  const [isDragonballActive, setIsDragonballActive] = useState(false);
  const bottomSheetModalRef = useRef(null);

  // BOTTOM SHEET VARIABLES
  const displayModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleDBPress = (db) => {
    // setIsDragonballActive(!isDragonballActive);
    displayModal();
    setActiveDragonball(db)
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
      const radius = 10; // Radius in meters
      const numPoints = 10; // Number of random points
      const randomCoords = generateRandomCoordinates(
        location,
        radius,
        numPoints
      );
      setDragonBallsNearby(dragonballsDummy);

      console.log("User location (parent): " + userLocation);
      console.log("Nearby dragons: " + JSON.stringify(dragonBallsNearby));
    };

    fetchLocation();
  }, [isDragonballActive]);

  return (
    <BottomSheetModalProvider>
      <StatusBar translucent />
      <View style={styles.page}>
        <MapsComponent
          userLocation={userLocation}
          dragonBallsNearby={dragonBallsNearby}
          dbPress={handleDBPress}
        />
        <View style={[styles.topWrap, { top: statusBar }]}>
          {/* TOP WRAP: LEFT */}
          <TouchableOpacity style={styles.topBackButton} onPress={goBack}>
            <Octicons name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          {/* TOP WRAP:RIGHT */}
          <View style={styles.topRight}>
            <View style={styles.topRightItem}>
              <Text style={styles.topRightHunt}>Cresslawn Hunt</Text>
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
        snapPoints={["35%", "50%"]}
        enablePanDownToClose
        animatedIndex={0}
        animateOnMount={false}
        // handleStyle={Handle}
        // onChange={handleSheetChanges}
        // handleComponent={Handle}
        // backgroundComponent={CustomBackground}
        // style={styles.bottomSheet}
        backgroundStyle={styles.bottomSheet}
      >
        <DragonballContent isDragonballActive={isDragonballActive} content={activeDragonball} userLoggedIn={userLoggedIn} />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
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

  // Top wrap interaction:
  topWrap: {
    position: "absolute",
    top: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  topBackButton: {
    backgroundColor: "#fff",
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
});
