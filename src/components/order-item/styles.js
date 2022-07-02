import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  dateText: {
    fontSize: 16,
    color: colors.primary,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  statusText: {
    fontSize: 16,
    color: colors.primary,
  },
});
