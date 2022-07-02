import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  containerList: {
    flex: 1,
  },
  footer: {
    borderTopColor: colors.primary,
    borderTopWidth: 1,
    paddingVertical: 5,
  },
  buttonConfirm: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textConfirm:{
    fontSize: 14,
    fontFamily: "Staatliches",
  },
  totalContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalTitle:{
    fontSize: 14,  
  },
  total: {
    fontSize: 16,
    fontFamily: "Staatliches",
  }
});
