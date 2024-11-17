import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { HuntRowCard } from "../Card/HuntRowCard";
import { formateDate } from "../../../../util/Services/Data/Utility/formatDate";

export const ListOfHunts = ({
  hunts,
  getModalId,
  header,
  cardPadding,
  customStyle,
  onScroll,
  getSelectedHuntId,
}) => {
  const currentOffset = useRef(0);

  // When I'm scrolling upwards the table should collapse
  const handleScroll = async (event) => {
    const newOffset = event.nativeEvent.contentOffset.y;
    const direction = newOffset > currentOffset.current ? "down" : "up";
    currentOffset.current = newOffset;
    onScroll(direction === "down");
  };

  const selectedHuntId = (id) => {
    getSelectedHuntId(id);
  };

  return (
    <View style={[styles.container, customStyle]}>
      {header}
      <FlatList
        data={hunts}
        renderItem={({ item }) => (
          <HuntRowCard
            id={item?.id}
            title={item?.title}
            startDate={formateDate(item?.startDate)}
            endDate={formateDate(item?.endDate)}
            padding={cardPadding}
            sendModalId={getModalId}
            onPress={() => selectedHuntId(item?.id)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 5, width: 10 }} />}
        showsVerticalScrollIndicator={false}
        onScrollEndDrag={handleScroll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
