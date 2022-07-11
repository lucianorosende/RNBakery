import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { OrderItem } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../store/actions/order.action"
import { styles } from "./styles";

const OrdersScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.order.items)

  const onDeleteOrder = () => {
    console.log("deleted order");
  };

  useEffect(() => {
    dispatch(getOrder());
  }, [])

  const renderItem = ({ item }) => (
    <OrderItem order={item} onDelete={onDeleteOrder} />
  );

  return (
    <View style={styles.container}>
      <View styles={styles.orderList}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default OrdersScreen;
