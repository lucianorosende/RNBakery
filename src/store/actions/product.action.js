import { productTypes } from "../types/product.types";

const { SELECT_PRODUCT, FILTERED_PRODUCTS } = productTypes;

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productId: id,
});

export const filteredProducts = (id) => ({
  type: FILTERED_PRODUCTS,
  categoryId: id,
});
