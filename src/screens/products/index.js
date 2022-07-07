import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { ProductItem } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import { filteredProducts } from "../../store/actions/product.action";
import { selectProduct } from "../../store/actions/product.action";
import { styles } from "./styles";

const ProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const filterProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const category = useSelector((state) => state.category.selected);

  useEffect(() => {
    dispatch(filteredProducts(category.id));
  }, []);

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate("ProductDetail", {
      name: item.name,
    });
  };

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filterProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductScreen;
