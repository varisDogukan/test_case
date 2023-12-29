import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
