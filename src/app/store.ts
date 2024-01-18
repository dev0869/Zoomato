import authSlice from "@/features/authSlice";
import LoaderSlice from "@/features/loaderSlice";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import cartSlice from "@/features/cartSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  loader: LoaderSlice,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
