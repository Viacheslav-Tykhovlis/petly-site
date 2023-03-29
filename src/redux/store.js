import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { registerReducer } from './register/registerSlice';
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

const logInPersistConfig = {
  key: 'login',
  storage,
  whitelist: ['token'],
};

const registerPersistConfig = {
  key: 'register',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    register: persistReducer(registerPersistConfig, registerReducer),
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
