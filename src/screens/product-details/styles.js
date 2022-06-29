import {StyleSheet, Dimensions} from "react-native"

const {height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      fontFamily: "Staatliches",
      fontSize: 20,
    },
    details:{
      height: height * 0.4,
      justifyContent: "space-around",
      alignItems: "center",
    }
  });