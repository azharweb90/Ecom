import { actionTypes } from "./actionTypes";

export const setProducts = (payload) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: payload,
  };
};

export const selectedProduct = (payload) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: payload,
  };
};
