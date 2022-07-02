import { StatusBar } from "expo-status-bar"
import { FlatList, Text, View } from "react-native"
import { OrderItem } from "../../components/index"
import { orders } from "../../data/orders"
import {styles} from "./styles"

const OrdersScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList data={orders} keyExtractor={(item) => item.id} renderItem={({ item }) => <OrderItem order={item} />} />
        </View>
    )
}

export default OrdersScreen;
