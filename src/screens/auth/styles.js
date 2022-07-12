import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  input: {
    height: 40,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: "90%",
  },
  label: {
    fontSize: 14,
    fontFamily: "Staatliches",
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: "Staatliches",
    marginBottom: 15,
    textAlign: "center",
  },
  prompt: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  promptMessage: {
    fontSize: 14,
    fontFamily: "Staatliches",
    color: colors.text,
    marginRight: 15,
  },
  promptButton: {
    fontSize: 14,
    color: colors.primary,
  },
});
