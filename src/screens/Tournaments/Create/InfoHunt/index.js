import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createItem, updateItem } from "../../../../util/Services/Data";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { GlobalStyle } from "../../../../util/Style";
import {
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
// import { Picker } from '@react-native-picker/picker';

import bgImg from "../../../../../assets/img/background/db_doodle.png";
import { Dropdown } from "@rafaelgomes/react-native-element-dropdown";

export const InfoHuntScreen = () => {
  const [title, setTitle] = useState("");
  const [titlePlaceholder, setTitlePlaceholder] = useState("Title");
  const [isTitleActive, setIsTitleActive] = useState(false);
  const [description, setDescription] = useState("");
  const [isDescriptionActive, setIsDescriptionActive] = useState(false);
  const [region, setRegion] = useState("");
  const [reward, setReward] = useState("Super Saiyan 1");
  const [date, setDate] = useState(dayjs());
  const [startsOn, setStartsOn] = useState(null);
  const [endsOn, setEndsOn] = useState(null);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const navigate = useNavigation();

  // UI FUNCTIONS
  const formatDate = (dateString) => {
    // Check if the input is a valid date string
    if (!dateString) {
      return "Select date";
    }

    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Invalid date";
    }

    const options = { day: "numeric", month: "long" };
    return date.toLocaleDateString("en-GB", options);
  };

  const [isFocus, setIsFocus] = useState(false);
  const location = [
    { label: "Pretoria", value: "1" },
    { label: "Centurion", value: "2" },
    { label: "Irene", value: "3" },
    { label: "Kempton Park", value: "4" },
    { label: "Johannesburg", value: "5" },
    { label: "Edenvale", value: "6" },
    { label: "Esther Park", value: "7" },
    { label: "Potchefstroom", value: "8" },
  ];
  const rewards = [
    { label: "Super Saiyan 1", value: "1" },
    { label: "Super Saiyan 2", value: "2" },
    { label: "Super Saiyan 3", value: "3" },
  ];

  const handleCreation = async () => {
    var items = {
      title,
      startsOn: formatDate(startsOn),
      endsOn: formatDate(endsOn),
      description,
      reward,
    };
    var success = await createItem("hunts", items);

    if (success) {
      navigate.goBack();
    } else {
      navigate.goBack();
      alert("FFailed to create hunt, Try again.");
    }
  };

  useEffect(() => {}, [startsOn, endsOn, isTitleActive, isDescriptionActive]);

  return (
    <View style={styles.container}>
      <Image
        source={bgImg}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />

      <View style={styles.labelWrap}>
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.labelText}>New Hunt</Text>
      </View>

      <ScrollView style={{ margin: 20, marginBottom: 0 }}>
        {/* TITLE INPUT */}
        <View
          style={[
            styles.inputWrap,
            {
              marginBottom: 20,
              borderWidth: isTitleActive ? 2 : 1,
              borderColor: isTitleActive ? "#2D2B28" : "#D3D3CB",
            },
          ]}
        >
          <TextInput
            style={[styles.inputText, { width: "100%" }]}
            placeholder={titlePlaceholder}
            onChangeText={(newText) => setTitle(newText)}
            defaultValue={title}
            cursorColor="#FFB10A"
            selectionColor="#FFB10A"
            selectionHandleColor="#FFB10A"
            onFocus={() => {
              setTitlePlaceholder(""), setIsTitleActive(true);
            }}
            onBlur={() => {
              setTitlePlaceholder("Title"), setIsTitleActive(false);
            }}
          />
        </View>

        {/* DESCRIPTION INPUT */}
        <View
          style={[
            styles.inputWrap,
            {
              marginBottom: 20,
              height: "auto",
              padding: 15,
              maxHeight: 400,
              borderWidth: isDescriptionActive ? 2 : 1,
              borderColor: isDescriptionActive ? "#2D2B28" : "#D3D3CB",
            },
          ]}
        >
          <TextInput
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            style={[styles.inputText, { minWidth: 120, maxHeight: 400 }]}
            placeholder="Description"
            onChangeText={(newText) => setDescription(newText)}
            onFocus={() => setIsDescriptionActive(true)}
            onBlur={() => setIsDescriptionActive(false)}
            defaultValue={description}
            cursorColor="#FFB10A"
            selectionColor="#FFB10A"
            selectionHandleColor="#FFB10A"
          />
        </View>

        {/* REGIONS INPUT */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#D3D3CB",
            borderRadius: 10,
            marginBottom: 20,
            backgroundColor: "#fff",
            borderWidth: isFocus ? 2 : 1,
            borderColor: isFocus ? "#2D2B28" : "#D3D3CB",
          }}
        >
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "#090F0C" }]}
            placeholderStyle={[styles.placeholderStyle]}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            itemTextStyle={styles.itemText}
            itemContainerStyle={{
              borderTopWidth: 0.5,
              borderTopColor: "#ccc",
              marginHorizontal: 10,
            }}
            iconStyle={styles.iconStyle}
            containerStyle={{ borderRadius: 10, marginTop: -5 }}
            data={location}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select region" : "Region"}
            searchPlaceholder="Search region"
            value={region}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setRegion(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Octicons
                name="location"
                size={16}
                color="#B3B0AA"
                style={styles.icon}
              />
            )}
          />
        </View>

        {/* DATE INPUT */}
        <View style={styles.dateWidget}>
          <TouchableOpacity
            style={[
              styles.inputWrap,
              {
                marginBottom: 20,
                backgroundColor: "#FBFBFB",
                borderWidth: isDateOpen ? 1 : 1,
                gap: 10,
                padding: 15,
                borderWidth: isDateOpen ? 2 : 1,
                borderColor: isDateOpen ? "#2D2B28" : "#D3D3CB",
              },
            ]}
            onPress={() => setIsDateOpen(!isDateOpen)}
          >
            <Octicons name="calendar" size={16} color="#B3B0AA" />
            <Text style={styles.inputText}>{formatDate(startsOn)}</Text>
            <AntDesign name="swapright" size={20} color="#2D2B28" />
            <Text style={styles.inputText}>{formatDate(endsOn)}</Text>
          </TouchableOpacity>
          <View
            style={[
              [
                styles.dateWrap,
                {
                  height: !isDateOpen && 0,
                  width: !isDateOpen && 0,
                  padding: isDateOpen && 15,
                  borderWidth: isDateOpen ? 0.5 : 0,
                },
              ],
            ]}
          >
            <DateTimePicker
              mode="range"
              startDate={startsOn}
              endDate={endsOn}
              onChange={(e) => {
                const { startDate, endDate } = e;
                console.log("Selected Start Date:", startDate);
                console.log("Selected End Date:", endDate);
                setStartsOn(startDate);
                setEndsOn(endDate);
              }}
              initialView="day"
              selectedItemColor="#FFB10A"
              selectedTextStyle={{
                fontFamily: "Mona-Sans Wide",
                color: "#111",
              }}
              timePickerTextStyle={{ fontFamily: "Mona-Sans Wide" }}
              weekDaysTextStyle={{ fontFamily: "Mona-Sans Wide SemiBold" }}
              calendarTextStyle={{ fontFamily: "Mona-Sans Wide" }}
            />
            <TouchableOpacity
              onPress={() => setIsDateOpen(!isDateOpen)}
              style={[
                GlobalStyle.LightOutlineButton,
                {
                  marginTop: 10,
                  flexWrap: "wrap",
                  width: 120,
                  paddingVertical: 15,
                },
              ]}
            >
              <Text
                style={[GlobalStyle.LightOutlineButtonText, { fontSize: 14 }]}
              >
                Save Date
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* REWARDS INPUT */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#D3D3CB",
            borderRadius: 10,
            marginBottom: 20,
            backgroundColor: "#fff",
            borderWidth: isFocus ? 2 : 1,
            borderColor: isFocus ? "#2D2B28" : "#D3D3CB",
          }}
        >
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "#090F0C" }]}
            placeholderStyle={[styles.placeholderStyle]}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            itemTextStyle={styles.itemText}
            itemContainerStyle={{
              borderTopWidth: 0.5,
              borderTopColor: "#ccc",
              marginHorizontal: 10,
            }}
            iconStyle={styles.iconStyle}
            containerStyle={{ borderRadius: 10, marginTop: -5 }}
            data={rewards}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select rewad" : "Reward"}
            searchPlaceholder="Choose reward"
            value={region}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setReward(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <MaterialCommunityIcons
                name="trophy-award"
                size={16}
                color="#B3B0AA"
                style={styles.icon}
              />
            )}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonWrap}>
        <TouchableOpacity
          style={[GlobalStyle.PrimaryFillButton, {}]}
          onPress={handleCreation}
        >
          <Text style={[GlobalStyle.PrimaryFillButtonText]}>CREATE HUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  labelWrap: {
    width: "100%",
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  labelText: {
    fontFamily: "Mona-Sans Wide Bold",
    fontSize: 24,
    textTransform: "uppercase",
  },
  inputWrap: {
    paddingHorizontal: 15,
    height: 50,
    fontSize: 14,
    borderWidth: 1,
    backgroundColor: "#FBFBFB",
    borderColor: "#D3D3CB",
    borderRadius: 10,
    width: "100%",
    flexDirection: "row",
    overflow: "hidden",
  },
  inputText: {
    fontFamily: "Mona-Sans Wide Medium",
    width: "auto",
  },
  dateWidget: {
    gap: 3,
  },
  dateWrap: {
    borderWidth: 0.5,
    borderColor: "#D8D2C9",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    overflow: "hidden",
    alignItems: "flex-end",
  },
  buttonWrap: {
    width: "100%",
    bottom: 0,
    padding: 20,
    backgroundColor: "#fff",
    borderTopColor: "#ccc",
    borderTopWidth: 0.5,
  },

  // DROPDOWN COMPONENT
  dropdown: {
    height: 50,
    backgroundColor: "#FBFBFB",
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    fontFamily: "Mona-Sans Wide Medium",
  },
  itemText: {
    fontSize: 12,
    fontFamily: "Mona-Sans Wide",
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: "Mona-Sans Wide Medium",
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: "Mona-Sans Wide Medium",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 12,
    fontFamily: "Mona-Sans Wide",
    borderRadius: 5,
  },
});
