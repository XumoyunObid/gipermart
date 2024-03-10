import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

import {
  addProduct,
  removeProduct,
  setCount,
  totalPrice,
  toggleAmmount,
  removeAllProduct,
} from "./product-reducer";

import {
  addWishlist,
  removeWishlist,
  setWishlistCount,
} from "./wishlist-reducer";

const storageMiddleWare = createListenerMiddleware();

storageMiddleWare.startListening({
  matcher: isAnyOf(
    addProduct,
    removeProduct,
    toggleAmmount,
    addWishlist,
    removeWishlist,
    removeAllProduct
  ),
  effect: (_, api) => {
    api.dispatch(totalPrice());
    api.dispatch(setCount());
    api.dispatch(setWishlistCount());
  },
});

export { storageMiddleWare };
