import React from "react";
import { View, Text, Button } from "react-native";
import { addItem } from "../../store/actions/cart.action";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";

const ProductDetailScreen = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const onHandleAddProduct = () => {
    dispatch(addItem(product));
  };

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.text}>ID: {product.id}</Text>
        <Text style={styles.text}>{product.name}</Text>
        <Text style={styles.text}>{product.description}</Text>
        <Text style={styles.text}>{product.weight}</Text>
        <Text style={styles.text}>$ {product.price}</Text>
        <Button
          color={colors.secondary}
          style={styles.button}
          title="Add to Cart"
          onPress={() => onHandleAddProduct()}
        ></Button>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
