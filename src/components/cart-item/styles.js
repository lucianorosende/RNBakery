import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 0.13,
  },
  headContainer: {},
  head: {
    fontSize: 16,
    fontFamily: "Staatliches",
  },
  containerDetail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detail: {},
  detailQty: {
    fontSize: 14,
  },
  detailPrice: {
    fontSize: 16,
    fontFamily: "Staatliches",
  },
});
