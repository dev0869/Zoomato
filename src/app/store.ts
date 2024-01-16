import authSlice from "@/features/authSlice";
import LoaderSlice from "@/features/loaderSlice";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "@/features/userSlice";
const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  user: userSlice,
  loader: LoaderSlice,
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
