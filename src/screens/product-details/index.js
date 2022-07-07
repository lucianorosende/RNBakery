import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params;
  const product = useSelector((state) => state.products.selected);

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.text}>ID: {product.id}</Text>
        <Text style={styles.text}>{product.name}</Text>
        <Text style={styles.text}>{product.description}</Text>
        <Text style={styles.text}>{product.weight}</Text>
        <Text style={styles.text}>$ {product.price}</Text>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
