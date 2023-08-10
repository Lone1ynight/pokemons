import { configureStore } from '@reduxjs/toolkit';
import { pokemonsApi } from '../services/pokemonsApi';

export default configureStore({
  reducer: {
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonsApi.middleware),
});