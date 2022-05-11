import { StatusBar } from "expo-status-bar";
import moment from "moment-timezone";
import { Image, StyleSheet, Text, View } from "react-native";
import { Icon, Slider } from "react-native-elements";
import { useRecoilState, useRecoilValue } from "recoil";
import { ITEMS, KOREAN_DATES, RISK_STEPS } from "~/constants/common";
import defaultStyles from "~/constants/styles/default";
import { switchColor, switchFoodPoisoningColor } from "~/functions/switchColor";
import { switchDay } from "~/functions/switchDay";
import { switchFoodPoisoningRisk } from "~/functions/switchFoodPoisoningRisk";
import { dataItemState } from "~/recoil/atoms/api/dataItem";
import { notProvidingState } from "~/recoil/atoms/api/notProviding";
import { dayState } from "~/recoil/atoms/day";
import { itemState } from "~/recoil/atoms/item";
import { SwitchMainIcon } from "./icons";
import Location from "./Location";
import NotProviding from "./NotProviding";
import Waiting from "./Waiting";

export default function Layout() {
  const dataItem = useRecoilValue(dataItemState);
  const notProviding = useRecoilValue(notProvidingState);
  const item = useRecoilValue(itemState);
  const [day, setDay] = useRecoilState(dayState);
  if (notProviding) {
    return <NotProviding {...notProviding} />;
  }
  if (!dataItem) {
    return <Waiting />;
  }
  return (
    <View
      style={{
        ...defaultStyles.container,
        backgroundColor:
          item === ITEMS.FOOD_POISONING_RISK
            ? switchFoodPoisoningColor(dataItem, day)
            : switchColor(dataItem, day),
      }}
    >
      <View style={defaultStyles.locationContainer}>
        <View style={defaultStyles.location}>
          <Location />
        </View>
        <View style={defaultStyles.lastUpdated}>
          <Text style={{ ...styles.date, paddingTop: 5 }}>최근 업데이트</Text>
          <Text style={styles.date}>{moment().format("YYYY-MM-DD HH:mm")}</Text>
        </View>
      </View>
      <View style={defaultStyles.iconContainer}>
        <Text style={defaultStyles.icon}>
          {SwitchMainIcon(item, switchDay(dataItem, day))}
        </Text>
      </View>
      <View style={defaultStyles.descriptionContainer}>
        <View style={styles.forcastContainer}>
          <View style={styles.forcast}>
            <View style={styles.dayContainer}>
              <Text style={styles.day}>{KOREAN_DATES[day]}</Text>
              <Text style={styles.date}>
                {moment()
                  .add(day - 1, "days")
                  .format("YYYY-MM-DD")}
              </Text>
            </View>
            <Slider
              value={day}
              onValueChange={setDay}
              maximumValue={3}
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
                    tvParallaxProperties={undefined}
                  />
                ),
              }}
            />
          </View>
          <View style={styles.riskContainer}>
            <Text style={styles.risk}>
              위험지수:{" "}
              {dataItem &&
                (item === ITEMS.FOOD_POISONING_RISK
                  ? RISK_STEPS[
                      switchFoodPoisoningRisk(switchDay(dataItem, day))
                    ]
                  : RISK_STEPS[switchDay(dataItem, day)])}{" "}
              <Text style={{ fontSize: 24 }}>
                {switchDay(dataItem, day) >= 0 &&
                  `(${switchDay(dataItem, day)})`}
              </Text>
            </Text>
            {/* <View style={{ flex: 4, marginTop: 20, justifyContent: "center" }}>
              <Text>{switchDescription(item, dataItem, day)}</Text>
            </View> */}
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          flex: 0.5,
          justifyContent: "center",
          alignItems: "flex-end",
          // backgroundColor: "white",
          paddingRight: 2,
        }}
      >
        <View>
          <Image source={require("~/images/img_opentype01.png")} />
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}
const styles = StyleSheet.create({
  date: { fontSize: 18, fontWeight: "300", color: "#FFF" },

  description: {
    fontSize: 25,
    fontWeight: "400",
  },
  forcastContainer: {
    flex: 1,
    width: "100%",
    // backgroundColor: "",
    padding: 20,
  },
  forcast: {
    flex: 2,
    alignItems: "stretch",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
    // backgroundColor: "blue",
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
    // backgroundColor: "red",
  },
  risk: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
});
