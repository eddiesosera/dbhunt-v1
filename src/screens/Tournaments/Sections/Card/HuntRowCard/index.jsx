import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  Touchable,
  View,
} from "react-native";
import React, { Component, useContext, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import img from "../../../../../../assets/img/misc/dragonballs.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../../../../util/Global";

const width = Dimensions.get("screen").width;

export const HuntRowCard = ({
  id,
  title,
  startDate,
  endDate,
  padding,
  sendModalId,
  ...rest
}) => {
  const { userLoggedIn } = useContext(Context);
  const [isDeletable, setIsDeletable] = useState(false);

  const deetsWrap = {
    width: width - (80 + 24 + (padding > 0 && padding * 2) - 10),
  };

  const openHuntModal = () => {
    sendModalId(id);
  };

  const deleteHunt = async () => {
    var success = await deleteItem("hunts", id);

    if (success) {
      setIsDeleteWarning(false);
    } else {
      alert("Count not delete.");
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={(e) => {
        openHuntModal();
        rest.onPress && rest.onPress(e); // Call any external onPress passed in rest
      }}
      onLongPress={() => setIsDeletable(true)}
      {...rest}
    >
      <Image source={img} style={styles.image} />

      <View style={[styles.deetsWrap, deetsWrap]}>
        <View style={styles.deetsItemWrap}>
          <Text style={styles.deetsItemTitle}>{title} Hunt</Text>
          <View style={styles.deetsItemTextWrap}>
            <Ionicons name="calendar-clear-outline" size={14} color="#3B3B3D" />
            <Text style={styles.deetsItemText}>
              {startDate} - {endDate}
            </Text>
          </View>
        </View>
        <Ionicons name="arrow-forward-outline" size={20} color="#3B3B3D" />
        {isDeletable && (
          <TouchableOpacity onPress={deleteHunt}>
            <Text>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#E0E0E9",
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    width: "100%",
    overflow: "hidden",
  },
  image: {
    height: 80,
    width: 80,
  },
  deetsWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingLeft: 15,
    borderLeftColor: "#E0E0E9",
    borderLeftWidth: 0.5,
    height: "100%",
  },
  deetsItemWrap: {
    gap: 5,
  },
  deetsItemTitle: {
    fontFamily: "Mona-Sans Wide Bold",
    fontSize: 14,
    color: "#3B3B3D",
  },
  deetsItemTextWrap: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  deetsItemText: {
    fontFamily: "Mona-Sans Wide",
    fontSize: 12,
    color: "#3B3B3D",
  },
});
