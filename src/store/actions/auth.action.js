import { authTypes } from "../types/auth.types";
import { URL_AUTH_SIGN_UP , URL_AUTH_SIGN_IN} from "../../constants/database/firebase";

const { SIGN_UP, SIGN_IN } = authTypes;

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();

      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (err) {
      console.log("error :", err.message);
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();

      dispatch({
        type: SIGN_IN,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (err) {
      console.log("error :", err.message);
    }
  };
}
