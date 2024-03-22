import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers';
import logger from 'redux-logger'


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  // Optionally, you can specify which reducer states you want to persist
  // whitelist: ['auth'],
  whitelist:["auth"]
};



const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({reducer: persistedReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), serializableCheck: false});
export const persistor = persistStore(store);
