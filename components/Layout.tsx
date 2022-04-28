import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Location from "./Location";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

export default function Layout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.location}>
          <Location />
        </Text>
        <Text style={styles.icon}>아이콘</Text>
        <Text style={styles.description}>높음</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.forcastContainer}>
          <View style={styles.forcast}>
            <Text>4일간의 예보</Text>
          </View>
          <View style={styles.forcast}>
            <Text style={styles.day}>오늘</Text>
            <Text style={styles.forcastDescription}>나쁨</Text>
          </View>
          <View style={styles.forcast}>
            <Text style={styles.day}>내일</Text>
            <Text style={styles.forcastDescription}>나쁨</Text>
          </View>
          <View style={styles.forcast}>
            <Text style={styles.day}>모레</Text>
            <Text style={styles.forcastDescription}>나쁨</Text>
          </View>
          <View style={styles.forcast}>
            <Text style={styles.day}>글피</Text>
            <Text style={styles.forcastDescription}>나쁨</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    flex: 2,
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
  },
  location: {
    fontSize: 35,
    fontWeight: "500",
  },
  icon: {
    fontSize: 85,
    fontWeight: "600",
  },
  description: {
    fontSize: 25,
    fontWeight: "400",
  },
  main: {
    flex: 3,
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "teal",
  },
  forcastContainer: {
    width: "80%",
    backgroundColor: "yellow",
    padding: 40,
  },
  forcast: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "violet",
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  day: {
    fontSize: 25,
    fontWeight: "500",
  },
  forcastDescription: {
    fontSize: 20,
    fontWeight: "400",
  },
});
