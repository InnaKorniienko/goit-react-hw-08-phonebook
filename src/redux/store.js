import { configureStore } from '@reduxjs/toolkit';
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice';
import authSlice from './auth/auth-slice';

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"]
}

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
reducer: {
  auth: persistedReducer,
  contacts: contactsSlice,
  filter: filterSlice,
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}),
});

export const persistor = persistStore(store);