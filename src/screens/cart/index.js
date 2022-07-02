import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { cart } from "../../data/cart";
import { CartItem } from "../../components/index";
import { styles } from "./styles";

const CartScreen = () => {
  const total = 12000;
  const onHandleDelete = (id) => {
    console.log("onHandleDelete", id);
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
