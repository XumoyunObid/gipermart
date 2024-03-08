import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

import { addProduct, removeProduct, setCount, totalPrice } from "./product-reducer";

const storageMiddleWare = createListenerMiddleware();

storageMiddleWare.startListening({
  matcher: isAnyOf(addProduct, removeProduct),
  effect: (_, api) => {
    api.dispatch(totalPrice());
    api.dispatch(setCount());
  },
});

export { storageMiddleWare };
