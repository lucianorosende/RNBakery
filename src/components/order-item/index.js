import IonicIcons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import { colors } from "../../constants/themes/colors";

const OrderItem = ({ order }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{order.date}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>{order.status}</Text>
      </View>
      <View style={styles.statusContainer}>
        <IonicIcons name="ios-arrow-forward" size={20} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;
