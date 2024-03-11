import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../Config/storage";

const initialState = loadState("order") || {
  orders: [],
};

const orderReducer = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      return {
        ...state,
        products: [
          ...state.orders,
          {
            ...action.payload,
          },
        ],
      };
    },
    removeOrder: (state, action) => {
      return {
        ...state,
        orders: state.orders.filter((item) => item.id !== action.payload.id),
      };
    },
  },
});

export default orderReducer.reducer;
export const { addOrder, removeOrder } = orderReducer.actions;
