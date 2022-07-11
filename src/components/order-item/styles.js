import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  headerContainer: {},
  header: {
    fontSize: 16,
    fontFamily: "Staatliches",
  },
  detailContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detail: {},
  total: {
    fontSize: 14,
    fontFamily: "SansPro",
  },
});
