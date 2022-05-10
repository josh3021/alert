import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import moment from "moment-timezone";
import { Image, StyleSheet, Text, View } from "react-native";
import { Icon, Slider } from "react-native-elements";
import { useRecoilState, useRecoilValue } from "recoil";
import { KOREAN_DATES, RISK_STEPS } from "~/constants/common";
import defaultStyles from "~/constants/styles/default";
import { switchColor } from "~/functions/switchColor";
import { switchDay } from "~/functions/switchDay";
import {
  oakPollenItemState,
  pinePollenItemState,
  weedsPollenItemState,
} from "~/recoil/atoms/api/dataItem";
import {
  oakPollenNotProvidingState,
  pinePollenNotProvidingState,
  weedsPollenNotProvidingState,
} from "~/recoil/atoms/api/notProviding";
import { dayState } from "~/recoil/atoms/day";
import { itemState } from "~/recoil/atoms/item";
import { SwitchMainIcon } from "./icons";
import Location from "./Location";
import PollenNotProviding from "./PollenNotProviding";
import Waiting from "./Waiting";

export default function PollenLayout({ loading }: { loading: boolean }) {
  const oakPollenItem = useRecoilValue(oakPollenItemState);
  const pinePollenItem = useRecoilValue(pinePollenItemState);
  const weedsPollenItem = useRecoilValue(weedsPollenItemState);
  const oakPollenNotProviding = useRecoilValue(oakPollenNotProvidingState);
  const pinePollenNotProviding = useRecoilValue(pinePollenNotProvidingState);
  const weedsPollenNotProviding = useRecoilValue(weedsPollenNotProvidingState);
  const item = useRecoilValue(itemState);
  const [day, setDay] = useRecoilState(dayState);
  if (
    oakPollenNotProviding &&
    pinePollenNotProviding &&
    weedsPollenNotProviding
  ) {
    return <PollenNotProviding />;
  }
  if (loading) {
    return <Waiting />;
  }
  return (
    <View style={defaultStyles.container}>
      <LinearGradient
        colors={[
          switchColor(oakPollenItem, day),
          switchColor(pinePollenItem, day),
          switchColor(weedsPollenItem, day),
        ]}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
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
          {SwitchMainIcon(
            item,
            switchDay(oakPollenItem ? oakPollenItem : weedsPollenItem, day)
          )}
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
                    tvParallaxProperties={undefined}
                  />
                ),
              }}
            />
          </View>
          <View style={styles.riskContainer}>
            <Text style={styles.risk}>
              참나무:{" "}
              {oakPollenItem && RISK_STEPS[switchDay(oakPollenItem, day)]}{" "}
              <Text style={{ fontSize: 16 }}>
                {switchDay(oakPollenItem, day) >= 0 &&
                  `(${switchDay(oakPollenItem, day)})`}
              </Text>
            </Text>
            <Text style={styles.risk}>
              소나무:{" "}
              {pinePollenItem && RISK_STEPS[switchDay(pinePollenItem, day)]}{" "}
              <Text style={{ fontSize: 16 }}>
                {switchDay(pinePollenItem, day) >= 0 &&
                  `(${switchDay(pinePollenItem, day)})`}
              </Text>
            </Text>
            <Text style={styles.risk}>
              잡초류:{" "}
              {weedsPollenItem && RISK_STEPS[switchDay(weedsPollenItem, day)]}{" "}
              <Text style={{ fontSize: 16 }}>
                {switchDay(weedsPollenItem, day) >= 0 &&
                  `(${switchDay(weedsPollenItem, day)})`}
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
});
