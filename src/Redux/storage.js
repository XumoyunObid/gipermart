import { configureStore } from "@reduxjs/toolkit";
import { storageMiddleWare } from "./Reducers/middleware";

import { saveState } from "../Config/storage";
import productReducer from "./Reducers/product-reducer";
import wishlistReducer from "./Reducers/wishlist-reducer";
import orderReducer from "./Reducers/order-reducer";
import { filterReducer } from "./Reducers/filter-reducer";

export const store = configureStore({
  reducer: {
    productReducer,
    wishlistReducer,
    orderReducer,
    filterReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().prepend(storageMiddleWare.middleware),
});

store.subscribe(() => {
  saveState("product", store.getState().productReducer);
  saveState("wishlist", store.getState().wishlistReducer);
  saveState("order", store.getState().orderReducer);
});
