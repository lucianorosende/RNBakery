import { createStore, combineReducers } from "redux";
import categoryReducer from "./reducers/category.reducer";
import productsReducer from "./reducers/products.reducer";

const RootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
});

export default createStore(RootReducer);
