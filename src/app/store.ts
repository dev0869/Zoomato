import authSlice from "@/features/authSlice";
import LoaderSlice from "@/features/loaderSlice";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "@/features/cartSlice";
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const rootReducer = combineReducers({
//   cart: cartSlice,
//   loader: LoaderSlice,
//   auth: authSlice,
// });
// justand
// const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: rootReduces,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
