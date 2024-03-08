import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../Config/storage";

const initialState = loadState("product") || {
  products: [],
  count: 0,
  totalPrice: 0,
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    totalPrice: (state) => {
      const price = state.products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.userPrice,
        0
      );
      return { ...state, totalPrice: price };
    },
    setCount: (state) => {
      const count = state.products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.userCount,
        0
      );
      return { ...state, count: count };
    },
    addProduct: (state, action) => {
      const idf = state.products.find((item) => item.id === action.payload.id);
      if (!idf) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1,
              userPrice: action.payload.price,
            },
          ],
        };
      }
      return state;
    },
    removeProduct: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
  },
});

export default productReducer.reducer;
export const { addProduct, setCount, removeProduct, totalPrice } =
  productReducer.actions;
