import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { logInReducer } from './login/logIn-slice';

const logInPersistConfig = {
  key: 'login',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    logIn: persistReducer(logInPersistConfig, logInReducer),
  },
});

export const persistor = persistStore(store);
