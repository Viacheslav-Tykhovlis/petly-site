import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { logInReducer } from './login/logIn-slice';
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
  },
});

export const persistor = persistStore(store);
