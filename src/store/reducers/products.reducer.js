import { products } from "../../data/products";
import { productTypes } from "../types/product.types";

const { SELECT_PRODUCT, FILTERED_PRODUCTS } = productTypes;

const initialState = {
  products,
  filteredProducts: [],
  selected: null,
};

const productsReducer = (state = initialState, action) => {
  if (action.type === SELECT_PRODUCT) {
    return {
      ...state,
      selected: state.products.find((p) => p.id === action.productId),
    };
  } else if (action.type === FILTERED_PRODUCTS) {
    return {
      ...state,
      filteredProducts: state.products.filter(
        (p) => p.categoryId === action.categoryId
      ),
    };
  }
  return state;
};

export default productsReducer;
