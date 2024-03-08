import { configureStore } from "@reduxjs/toolkit";
import { storageMiddleWare } from "./Reducers/middleware";

import { saveState } from "../Config/storage";
import productReducer from "./Reducers/product-reducer";

export const store = configureStore({
  reducer: {
    productReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().prepend(storageMiddleWare.middleware),
});

store.subscribe(() => {
  saveState("product", store.getState().productReducer);
  // saveState("wishlist", store.getState().wishlistReducer);
});