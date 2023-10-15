// import { createStore } from "redux";
import cakeSlice from "./features/cakeSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
   cakeData:cakeSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
