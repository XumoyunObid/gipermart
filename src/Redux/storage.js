import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reducers/product-reducer";
import { saveState } from "../Config/storage";

export const store = configureStore({
  reducer: {
    productReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware(),
});

store.subscribe(() => {
  saveState("product", store.getState().productReducer);
  // saveState("wishlist", store.getState().wishlistReducer);
});
