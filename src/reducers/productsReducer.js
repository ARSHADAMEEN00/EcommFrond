import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "../constants/productsConstants.js";

export const productReducer = (state = { products: [] }, action) => {
    console.log(action.payload);
  switch (action.key) {
    case GET_PRODUCTS_REQUEST:
      return {
        loading: true,
      };

    case GET_PRODUCTS_SUCCESS: {
      return {
        loading: false,
        products: action.payload,
      };
    }

    case GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
