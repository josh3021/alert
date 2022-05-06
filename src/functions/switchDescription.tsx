import { FlatList, StyleSheet, Text } from "react-native";
import { ITEMS } from "~/constants/common";
import {
  ASTHMA_RISK_DESCRIPTION,
  COLD_RISK_DESCRIPTION,
  FOOD_POISONING_RISK_DESCRIPTION,
  POLLEN_RISK_DESCRIPTION,
  STROKE_RISK_DESCRIPTION,
} from "~/constants/descriptions";
import { IDataItem } from "~/interfaces/api/data";
import { switchDay } from "./switchDay";

const switchDescriptionItem = (risk: number) => {
  console.log(risk);
  switch (risk) {
    case 0:
      return "low";
    case 1:
      return "normal";
    case 2:
      return "high";
    case 3:
      return "veryHigh";
    default:
      return "unknown";
  }
};

export const switchDescription = (
  item: ITEMS,
  dataItem: IDataItem | null,
  day: number
) => {
  switch (item) {
    case ITEMS.ASTHMA_RISK:
      return (
        <FlatList
          data={
            ASTHMA_RISK_DESCRIPTION[
              switchDescriptionItem(switchDay(dataItem, day))
            ]
          }
          renderItem={({ item, index }) => (
            <Text key={index} style={styles.listText}>
              {"\u2022"} {item}
            </Text>
          )}
          scrollEnabled={false}
        />
      );
    case ITEMS.COLD_RISK:
      return (
        <FlatList
          data={
            COLD_RISK_DESCRIPTION[
              switchDescriptionItem(switchDay(dataItem, day))
            ]
          }
          renderItem={({ item, index }) => (
            <Text key={index} style={styles.listText}>
              {"\u2022"} {item}
            </Text>
          )}
          scrollEnabled={false}
        />
      );
    case ITEMS.FOOD_POISONING_RISK:
      return (
        <FlatList
          data={
            FOOD_POISONING_RISK_DESCRIPTION[
              switchDescriptionItem(switchDay(dataItem, day))
            ]
          }
          renderItem={({ item, index }) => (
            <Text key={index} style={styles.listText}>
              {"\u2022"} {item}
            </Text>
          )}
          scrollEnabled={false}
        />
      );
    case ITEMS.POLLEN_RISK:
      return (
        <FlatList
          data={
            POLLEN_RISK_DESCRIPTION[
              switchDescriptionItem(switchDay(dataItem, day))
            ]
          }
          renderItem={({ item, index }) => (
            <Text key={index} style={styles.listText}>
              {"\u2022"} {item}
            </Text>
          )}
          scrollEnabled={false}
        />
      );
    case ITEMS.STROKE_RISK:
      return (
        <FlatList
          data={
            STROKE_RISK_DESCRIPTION[
              switchDescriptionItem(switchDay(dataItem, day))
            ]
          }
          renderItem={({ item, index }) => (
            <Text key={index} style={styles.listText}>
              {"\u2022"} {item}
            </Text>
          )}
          scrollEnabled={false}
        />
      );
  }
};

const styles = StyleSheet.create({
  listText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#c8d6e5",
    paddingTop: 5,
  },
});
