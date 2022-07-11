import { orders } from '../../data/orders';
import { orderTypes } from "../types/order.types";

const { GET_ORDER } = orderTypes;

const initialState = {
  items: [],
};

const orderReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case GET_ORDER:
      return {
        ...state,
        items: action.payload
      }
      default: return state;
  }
};

export default orderReducer;