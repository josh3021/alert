import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useRecoilValue } from "recoil";
import defaultStyles from "~/constants/styles/default";
import { switchDay } from "~/functions/switchDay";
import { dataItemState } from "~/recoil/atoms/api/dataItem";
import { dayState } from "~/recoil/atoms/day";
import { itemState } from "~/recoil/atoms/item";
import { SwitchMainIcon } from "./icons";
import Location from "./Location";

function Waiting() {
  const dataItem = useRecoilValue(dataItemState);
  const day = useRecoilValue(dayState);
  const item = useRecoilValue(itemState);

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.locationContainer}>
        <View style={defaultStyles.location}>
          <Location />
        </View>
        <View style={defaultStyles.lastUpdated} />
      </View>
      <View style={styles.waitingContainer}>
        <View style={defaultStyles.iconContainer}>
          <Text style={defaultStyles.icon}>
            {SwitchMainIcon(item, switchDay(dataItem, day))}
          </Text>
        </View>
        <View style={defaultStyles.descriptionContainer}>
          <Text style={styles.waiting}>자료 가져오는 중...</Text>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

export default Waiting;

const styles = StyleSheet.create({
  waitingContainer: {
    flex: 2,
  },
  waiting: {
    fontSize: 30,
    fontWeight: "600",
    color: "#FFF",
  },
});
