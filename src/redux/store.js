import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { logInReducer } from './login/logIn-slice';
import { newsReducer } from './news/newsSlice';
import { noticesReducer } from './notices/noticesSlice';
import { userReducer } from './users/userSlice';
import { petsReducer } from './pets/petSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { newsReducer } from './news/newsSlice';

const logInPersistConfig = {
  key: 'login',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    logIn: persistReducer(logInPersistConfig, logInReducer),
    news: newsReducer,
    notices: noticesReducer,
    users: userReducer,
    pets: petsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
