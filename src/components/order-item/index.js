import IonicIcons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import { colors } from "../../constants/themes/colors";

const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ order, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{formatDate(order.date)}</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.detail}>
          <Text style={styles.total}>Total: ${order.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(order.id)}>
          <IonicIcons name="trash" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
