import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebook/phonebookReducer";
import authReducer from "./auth/authReducer";
import loaderReducer from "./loader/loaderReducer";
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    auth: persistReducer(persistConfig, authReducer),
    loader: loaderReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);