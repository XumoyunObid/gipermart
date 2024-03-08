// import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

// import {
//   addProduct,
// } from "./productReducer.js";

// const storageMiddleWare = createListenerMiddleware();

// storageMiddleWare.startListening({
//   matcher: isAnyOf(addProduct),
//   effect: (_, api) => {
//     api.dispatch(totalPrice());
//     api.dispatch(setCount());
//   },
// });

// export { storageMiddleWare };