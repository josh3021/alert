import { StatusBar } from "expo-status-bar";
import moment from "moment-timezone";
import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Icon, Slider } from "react-native-elements";
import { useRecoilValue } from "recoil";
import { ITEMS, KOREAN_DATES, RISK_STEPS } from "~/constants/common";
import { switchColor } from "~/functions/switchColor";
import { switchDay } from "~/functions/switchDay";
import { dataItemState } from "~/recoil/atoms/api/dataItem";
import { SwitchMainIcon } from "./icons";
import Location from "./Location";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

interface ILayout {
  item: ITEMS;
}

export default function Layout({ item }: ILayout) {
  const dataItem = useRecoilValue(dataItemState);
  const [day, setDay] = useState<number>(1);
  useEffect(() => {
    if (dataItem) {
      console.log(`dataItem: ${JSON.stringify(dataItem)}`);
    }
  }, [dataItem]);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: switchColor(dataItem, day),
      }}
    >
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>
            <Location />
          </Text>
          <Text style={styles.date}>{moment().format("YYYY-MM-DD HH:mm")}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>
            {SwitchMainIcon(item, switchDay(dataItem, day))}
          </Text>
        </View>
        {/* <Text style={styles.description}>
          {dataItem?.code ? dataItem.code : "Waiting..."}
        </Text> */}
      </View>
      <View style={styles.main}>
        <View style={styles.forcastContainer}>
          <View style={styles.forcast}>
            <View style={styles.dayContainer}>
              <Text style={styles.day}>{KOREAN_DATES[day]}</Text>
            </View>
            <Slider
              value={day}
              onValueChange={setDay}
              maximumValue={4}
              minimumValue={1}
              step={1}
              trackStyle={styles.trackStyle}
              thumbStyle={styles.thumbStyle}
              thumbProps={{
                children: (
                  <Icon
                    name="heart"
                    type="font-awesome"
                    size={20}
                    reverse
                    containerStyle={styles.thumbIcon}
                    color="#f50"
                  />
                ),
              }}
            />
          </View>
          <View style={styles.riskContainer}>
            <Text style={styles.risk}>
              위험지수: {dataItem && RISK_STEPS[switchDay(dataItem, day)]}
            </Text>
            {/* <View style={{ flex: 4, marginTop: 20, justifyContent: "center" }}>
              <Text>{switchDescription(item, dataItem, day)}</Text>
            </View> */}
          </View>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2ecc71",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    flex: 5,
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  locationContainer: {
    flex: 1.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  location: {
    fontSize: 36,
    fontWeight: "300",
  },
  date: { fontSize: 18, fontWeight: "300", color: "#FFF" },
  iconContainer: { flex: 2, justifyContent: "center" },
  icon: {
    fontSize: 85,
    fontWeight: "600",
  },
  description: {
    fontSize: 25,
    fontWeight: "400",
  },
  main: {
    flex: 2,
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "teal",
  },
  forcastContainer: {
    flex: 1,
    width: "100%",
    // backgroundColor: "",
    padding: 20,
  },
  forcast: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  dayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  day: { fontSize: 36, fontWeight: "bold", color: "#FFF" },
  forcastDescription: {
    fontSize: 20,
    fontWeight: "400",
  },
  trackStyle: { height: 10, backgroundColor: "#FFF" },
  thumbStyle: {
    height: 20,
    width: 20,
    backgroundColor: "white",
  },
  thumbIcon: { bottom: 20, right: 20 },
  riskContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  risk: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
});
