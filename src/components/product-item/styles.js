import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    margin: 20,
    height: 180,
  },
  containerTouchable: {
    flex: 1,
    borderRadius: 10,
    shadowColor: colors.shadow,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 11,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 18,
    fontFamily: "Staatliches",
    color: colors.black,
  },
  details: {
    fontFamily: "Staatliches",
    fontSize: 14,
  },
});
