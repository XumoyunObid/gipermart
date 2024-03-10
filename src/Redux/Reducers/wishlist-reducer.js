import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../Config/storage";

const initialState = loadState("wishlist") || {
  wishlistProducts: [],
  wishlistCount: 0,
};

const wishlistReducer = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlistCount: (state) => {
      const count = state.wishlistProducts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.wishlistCount,
        0
      );
      return { ...state, wishlistCount: count };
    },
    addWishlist: (state, action) => {
      const idf = state.wishlistProducts.find(
        (item) => item.id === action.payload.id
      );
      if (!idf) {
        return {
          ...state,
          wishlistProducts: [
            ...state.wishlistProducts,
            {
              ...action.payload,
              wishlistCount: 1,
            },
          ],
        };
      }
      return state;
    },
    removeWishlist: (state, action) => {
      return {
        ...state,
        wishlistProducts: state.wishlistProducts.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
  },
});

export default wishlistReducer.reducer;
export const { addWishlist, setWishlistCount, removeWishlist } =
  wishlistReducer.actions;
