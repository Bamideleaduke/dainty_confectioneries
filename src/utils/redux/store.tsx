// import { createStore } from "redux";
import AuthSlice from "./features/AuthSlice";
import cakeSlice from "./features/cakeSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cakeData: cakeSlice,
    user: AuthSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
