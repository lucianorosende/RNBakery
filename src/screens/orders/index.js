import React, { useEffect } from "react";
import { FlatList, Text, View, SafeAreaView } from "react-native";
import { OrderItem } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, deleteOrder } from "../../store/actions/order.action";
import { styles } from "./styles";

const OrdersScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.items);

  useEffect(() => {
    dispatch(getOrder());
  }, []);

  const onDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
  };

  const renderItem = ({ item }) => (
    <OrderItem order={item} onDelete={onDeleteOrder} />
  );

  return (
    <SafeAreaView style={{ flex: 1}}>
    <View style={styles.container}>
      <View styles={styles.orderList}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
    </SafeAreaView>
  );
};

export default OrdersScreen;
