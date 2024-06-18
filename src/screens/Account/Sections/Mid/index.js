import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import avatar from "../../../../../assets/img/characters/belma.png";
import { FontAwesome6, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { GlobalStyle } from "../../../../util/Style";
import { Context } from "../../../../util/Global";
import { matchedEntity } from "../../../../util/Services/Data/Filters/General/matchEntity";
import { dragonballsDummy } from "../../../../util/Services/Data/Dummy/dragonballs";
import { avatarsDummy } from "../../../../util/Services/Data/Dummy/avatar";

export const MidSection = (user) => {
  const { userLoggedIn, setUserLoggedIn } = useContext(Context);
  const [userAvatar, setUserAvatar] = useState();

  useEffect(() => {
    const findAvatars = async () => {
      const getUserAvatar = matchedEntity(avatarsDummy, "id", userLoggedIn?.avatar)

        setUserAvatar(getUserAvatar.match.image);

    };

    findAvatars();

    console.log("NEWLY LOGGED IN USER: " + JSON.stringify(userLoggedIn));
  }, [userLoggedIn]);

  return (
    <View style={styles.container}>
      <View style={styles.midTopDeetsWrap}>
        <View style={styles.midTopDeetsTopWrap}>
          <Image source={userAvatar} style={styles.midTopDeetsTopAvatar} />
          <Text style={styles.midTopDeetsTopUsername}>
            {userLoggedIn?.username}
          </Text>
        </View>

        <View style={styles.midTopDeetsBtmWrap}>
          {/* <View style={styles.midTopDeetsBtmItemWrap}>
                        <FontAwesome6 name="location-dot" size={20} color="black" />
                        <Text style={styles.midTopDeetsBtmItemText}>
                            Pretoria
                        </Text>
                    </View> */}
          <View style={styles.midTopDeetsBtmItemWrap}>
            <MaterialIcons name="stars" size={20} color="black" />
            <Text style={styles.midTopDeetsBtmItemText}>
              {userLoggedIn?.dragonballs?.length} collected
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.midTopBtmWrap}>
        {/* <View style={styles.midTopBtmCompetitionsWrap}>
          <Text style={styles.midTopDeetsBtmItemText}>Competed In</Text>
          <Text style={styles.midTopBtmCompetitionsText}>
            {userLoggedIn?.hunts?.length}
          </Text>
        </View> */}
        {/* <View style={GlobalStyle.PrimaryFillButton}>
                    <MaterialIcons name="move-down" size={24} color="#fff" />
                    <Text style={GlobalStyle.PrimaryFillButtonText}>
                        Loot
                    </Text>
                </View> */}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    flex:1
  },

  // Top Section
  midTopDeetsWrap: {
    alignItems: "center",
  },
  midTopDeetsTopWrap: {
    alignItems: "center",
    gap: 20,
  },
  midTopDeetsTopAvatar: {
    width: 150,
    height: 150,
    objectFit: "contain",
  },
  midTopDeetsTopUsername: {
    fontFamily: "Saiyans Sans",
    fontSize: 36,
  },

  midTopDeetsBtmWrap: {
    alignItems: "center",
    gap: 5,
    marginTop: 20,
  },
  midTopDeetsBtmItemWrap: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  midTopDeetsBtmItemText: {
    fontFamily: "Mona-Sans Wide SemiBold",
  },

  // Bottom section
  midTopBtmWrap: {
    marginTop: 40,
    gap: 10,
    width: "100%",
  },
  midTopBtmCompetitionsWrap: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFF2",
    padding: 20,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: "#D8D2C9",
  },
  midTopBtmCompetitionsText: {
    fontFamily: "Mona-Sans Wide Bold",
  },
});
