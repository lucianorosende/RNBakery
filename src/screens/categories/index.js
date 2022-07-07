import React from "react";
import { View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../store/actions/category.action";
import { CategoryItem } from "../../components/index";
import { styles } from "./styles";

const CategorieScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const categorySelected = useSelector((state) => state.category.selected);
  const categoryProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Products", {
      categoryId: item.id,
      title: item.title,
    });
  };

  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected}></CategoryItem>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

export default CategorieScreen;
