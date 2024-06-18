import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { TopSection } from "./Sections/Top";
import { MidSection } from "./Sections/Mid";
import { BottomSection } from "./Sections/Btm";

import bg from "../../../assets/img/background/db_doodle.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Context } from "../../util/Global";
import { GlobalStyle } from "../../util/Style";
import { NotLoggedIn } from "./NotLoggedIn";

export const AccountScreen = () => {
  const { userLoggedIn, setUserLoggedIn } = useContext(Context);
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(Context);

  useEffect(()=>{}),[userLoggedIn];

  return (
    <View style={styles.container}>
      <Image source={bg} style={styles.bg} />

      {isUserLoggedIn ? (
        <>
          <StatusBar />
          <TopSection />
          <MidSection />
          <BottomSection />
        </>
      ) : (
        <NotLoggedIn/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // width: '100%',
    backgroundColor: "#F1F1F0",
    // objectFit: 'scale-down'
  },
  bg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    position: "absolute",
    zIndex: 0,
  },

});
