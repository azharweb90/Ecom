import { actionTypes } from "../actions/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      category: "men's",
      price: "7.99",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
