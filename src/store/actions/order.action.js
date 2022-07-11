import { orderTypes } from "../types/order.types";
import { URL_API } from "../../constants/database/firebase";

const { GET_ORDER } = orderTypes;

export const getOrder = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/orders.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      const orders = Object.keys(data).map((key) => {
        return {
          ...data[key],
          id: key,
        };
      });

      dispatch({
        type: GET_ORDER,
        payload: orders,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
