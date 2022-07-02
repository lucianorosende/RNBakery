import React from "react";
import { View, FlatList } from "react-native";
import { ProductItem } from "../../components/index";
import { products } from "../../data/products";
import { styles } from "./styles";

const ProductScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const filterProduct = products.filter(
    (product) => product.categoryId === categoryId
  );

  const onSelected = (item) => {
    navigation.navigate("ProductDetail", {
      productId: item.id,
      name: item.name,
    });
  };

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filterProduct}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductScreen;
