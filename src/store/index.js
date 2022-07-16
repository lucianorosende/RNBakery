import { createStore, combineReducers, applyMiddleware } from "redux";
import categoryReducer from "./reducers/category.reducer";
import productsReducer from "./reducers/products.reducer";
import cartReducer from "./reducers/cart.reducer";
import orderReducer from "./reducers/order.reducer";
import AuthReducer from "./reducers/auth.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
  order: orderReducer,
  auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
