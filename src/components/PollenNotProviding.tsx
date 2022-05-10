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

function PollenNotProviding() {
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
      <View style={styles.notProvidingContainer}>
        <View style={defaultStyles.iconContainer}>
          <Text style={defaultStyles.icon}>
            {SwitchMainIcon(item, switchDay(dataItem, day))}
          </Text>
        </View>
        <View style={defaultStyles.descriptionContainer}>
          <Text style={styles.notProvidingDescription}>
            해당지수자료 제공기간이 아닙니다!
          </Text>
          <Text style={styles.notProvidingRangeDescription}>
            [자료제공기간]
          </Text>
          <Text style={styles.notProvidingRangeDescription}>
            참나무, 소나무: 4월 ~ 6월
          </Text>
          <Text style={styles.notProvidingRangeDescription}>
            잡초류: 8월 ~ 10월
          </Text>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

export default PollenNotProviding;

const styles = StyleSheet.create({
  notProvidingContainer: {
    flex: 6,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
  notProvidingDescription: {
    fontSize: 24,
    fontWeight: "400",
    color: "#FFF",
    marginBottom: 8,
  },
  notProvidingRangeDescription: {
    fontSize: 18,
    fontWeight: "400",
    color: "#FFF",
  },
});
