import { Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  locationContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  descriptionContainer: {
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 85,
    fontWeight: "600",
    color: "#FFF",
  },
  location: {
    flex: 6,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  lastUpdated: {
    flex: 1,
    alignItems: "center",
  },
});

export default defaultStyles;
