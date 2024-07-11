import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";
import React, {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalStyle } from "../../../../util/Style";
import dragonball from "../../../../../assets/img/misc/dragonball.png";
import { matchedEntity } from "../../../../util/Services/Data/Filters/General/matchEntity";
import { playersDummy } from "../../../../util/Services/Data/Dummy/players";
import { updateItem } from "../../../../util/Services/Data";

const screenHeight = Dimensions.get("screen").height;

export const DragonballContent = ({ isDragonballActive, content, userLoggedIn }) => {
  const [claimedBy, setClaimedBy] = useState();

  const collectDragonball = () => {
    if(!content.owner){
        updateItem("dragonballs", content.id, {
            claimed: true,
            claimedOn: Date.now(),
            owner: userLoggedIn.id,
          });
    }
    
  };

  useEffect(() => {
    if (content.claimed) {
      let matchedPlayer = matchedEntity(playersDummy, "id", content.owner);
      if (matchedPlayer.found) {
        setClaimedBy("Claimed by " + matchedPlayer.match.username);
      } else {
        setClaimedBy("Unclaimed");
      }
    } else {
      setClaimedBy("Unclaimed");
    }
  }, [isDragonballActive, content]);

  return (
    <View style={styles.dragonballSheet}>
      {isDragonballActive ? (
        <View style={styles.selectedDBWrap}>
          <View style={styles.selectedDBContent}>

            <Image 
            source={dragonball} 
            style={styles.selectedDBImg}
             />

            <View style={styles.selectedRightDB}>
              <Text style={styles.selectedRightDBTitle}>Dragonball</Text>
              <View style={styles.selectedRightBtm}>
                <View style={styles.selectedRightBtmItem}>
                  <Ionicons name="star" size={18} color="#999" />
                  <Text style={styles.selectedRightBtmItemText}>3 stars</Text>
                </View>
                <View style={styles.selectedRightBtmItem}>
                  <Ionicons name="person" size={18} color="#999" />
                  <Text style={styles.selectedRightBtmItemText}>
                    {claimedBy}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity style={GlobalStyle.PrimaryFillButton}>
            <Text
              style={GlobalStyle.PrimaryFillButtonText}
              onPress={collectDragonball}
            >
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
  dragonballSheet: {
    // flex: 1,
    flexDirection: "column",
    gap: 20,
    height: screenHeight * 0.32 - 35,
    padding: 20,
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
