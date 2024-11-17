import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Table } from "./Table";
import { TopThree } from "./TopThree";
import { playersDummy } from "../../../util/Services/Data/Dummy/players";
import { HuntsDummyData } from "../../../util/Services/Data/Dummy/huntsDummy";
import { topThree } from "../../../util/Services/Data/Filters/Player/TopThree/getTopThree";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { avatarsDummy } from "../../../util/Services/Data/Dummy/avatar";
import { Bottom } from "./Bottom";
import { Context } from "../../../util/Global";

export const LeaderboardScreen = ({ navigation }) => {
  const [player, setPlayer] = useState({});
  const [players, setPlayers] = useState([]);
  const [hunt, setHunt] = useState({});
  const [hunts, setHunts] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [topPlayers, setTopPlayers] = useState([]);
  const { userLoggedIn } = useContext(Context);

  useEffect(() => {
    // Match Player:
    setPlayer(players[1]);

    // Get Players:
    setPlayers(players);

    // Get Top Players:
    setTopPlayers(topThree(players));

    // Match Hunt:
    setHunt(hunt);

    // Avatars:
    setAvatars(avatarsDummy);
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  // Data
  const handleGettingOfData = async () => {
    var allData = await getAllItems("hunts");
    setHunts(allData);

    if (hunts) {
      var singleData = await getItem("hunts", hunts[0].id);
      setUserHunt(singleData);
    }
  };

  useFocusEffect(
    useCallback(() => {
      handleGettingOfData();
      return () => {};
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.topWrap}>
        <TouchableOpacity onPress={goBack} style={styles.topBack}>
          <Octicons name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.topHeader}>Leaderboard</Text>
        <Text style={styles.topHuntName}>
          {userLoggedIn?.region?.address} Hunt
        </Text>
      </View>

      <View style={styles.playersListsWrap}>
        <TopThree
          topPlayers={topPlayers}
          playerItem={player}
          avatars={avatars}
        />
        <Table players={players} playerLogged={player} avatars={avatars} />
      </View>

      <Bottom />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },

  // TOP:
  topWrap: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  topBack: {
    paddingBottom: 10,
  },
  topHeader: {
    fontFamily: "Mona-Sans Wide Bold",
    fontSize: 24,
    lineHeight: 24,
    color: "#131318",
  },
  topHuntName: {
    fontFamily: "Mona-Sans Medium",
  },

  // BOTTOM LIST:
  playersListsWrap: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    gap: 20,
  },
});
