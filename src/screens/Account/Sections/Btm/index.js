import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Context } from "../../../../util/Global";

export const BottomSection = (user) => {
  const { userLoggedIn, setUserLoggedIn } = useContext(Context);
  const [userBadges, setUserBadges] = useState([
    { level: 0 },
    { level: 0 },
    { level: 0 },
  ]);

  useEffect(() => {

    // Render badge based on 
    if (userLoggedIn?.awards?.length === 0) {
      setUserBadges([{ level: 0 }, { level: 0 }, { level: 0 }]);
    } else if (userLoggedIn?.awards?.length === 1){
        setUserBadges([{ level: 1 }, { level: 0 }, { level: 0 }]);
    } else if (userLoggedIn?.awards?.length === 2){
        setUserBadges([{ level: 1 }, { level: 2 }, { level: 0 }]);
    } else if (userLoggedIn?.awards?.length === 3){
        setUserBadges([{ level: 1 }, { level: 2 }, { level: 3 }]);
    }

  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.btmHeaderWrap}>
        <View style={styles.btmLabelWrap}>
          <FontAwesome6 name="medal" size={18} color="black" />
          <Text style={styles.btmLabelText}>Achievements</Text>
        </View>
        <Text style={styles.btmLabelNumberOfBadges}>
            {userLoggedIn?.awards?.length}
        </Text>
      </View>

      <View style={styles.btmBadgesWrap}>
        {userBadges.map((badge, i) => {
          return (
            <>
              {badge.level === 0 ? (
                <View
                  key={i}
                  style={[styles.btmBadgeWrap, styles.badgeLvlNone]}
                >
                  <FontAwesome6 name="medal" size={18} color="#F7F7F1" />
                  <View style={styles.btmBadgeTextWrap}>
                    <Text style={styles.badgeLvlNoneText}>Super</Text>
                    <Text style={styles.badgeLvlNoneText}>Saiyan 1</Text>
                  </View>
                </View>
              ) : badge.level === 1 ? (
                <View key={i} style={[styles.btmBadgeWrap, styles.badgeLvlOne]}>
                  <FontAwesome6 name="medal" size={18} color="#FFC266" />
                  <View style={styles.btmBadgeTextWrap}>
                    <Text style={styles.btmBadgeText}>Super</Text>
                    <Text style={styles.btmBadgeText}>Saiyan 2</Text>
                  </View>
                </View>
              ) : badge.level === 2 ? (
                <View key={i} style={[styles.btmBadgeWrap, styles.badgeLvlTwo]}>
                  <FontAwesome6 name="medal" size={18} color="#FFC266" />
                  <View style={styles.btmBadgeTextWrap}>
                    <Text style={styles.btmBadgeText}>Super</Text>
                    <Text style={styles.btmBadgeText}>Saiyan 3</Text>
                  </View>
                </View>
              ) : null}
            </>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: '100%',
    width: "100%",
    backgroundColor: "#FFF",
    padding: 20,
    borderTopColor: "#D8D2C9",
    borderTopWidth: 0.5,
    marginTop: 20,
    gap: 20,
  },

  // Top Header Label
  btmHeaderWrap: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btmLabelWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  btmLabelText: {
    fontSize: 16,
    fontFamily: "Mona-Sans Wide Bold",
  },
  btmLabelNumberOfBadges: {
    fontSize: 16,
    fontFamily: "Mona-Sans Wide Bold",
  },

  // Badges List
  btmBadgesWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    gap: 5,
    // flex: 4
  },
  btmBadgeWrap: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    gap: 20,
    width: "auto",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  badgeLvlNone: {
    backgroundColor: "#F7F7F1",
    borderColor: "#D1D1D8",
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  badgeLvlNoneText: {
    color: "#F7F7F1",
    fontFamily: "Obrazec",
    fontSize: 20,
  },
  badgeLvlOne: {
    backgroundColor: "#10100D",
  },
  badgeLvlTwo: {
    backgroundColor: "#10100D",
  },
  btmBadgeTextWrap: {
    alignItems: "center",
  },
  btmBadgeText: {
    fontFamily: "Obrazec",
    fontSize: 20,
    color: "#FFC266",
  },
});
