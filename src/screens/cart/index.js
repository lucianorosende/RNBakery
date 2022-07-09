import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../store/actions/cart.action";
import { CartItem } from "../../components/index";
import { styles } from "./styles";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const onHandleDelete = (id) => {
    dispatch(removeItem(id));
  };
  const onHandleConfirm = () => {
    console.log("Confirm Cart");
  };

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={onHandleDelete} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerList}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.buttonConfirm}
          onPress={onHandleConfirm}
        >
          <Text style={styles.textConfirm}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalTitle}>Total: </Text>
            <Text style={styles.total}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
