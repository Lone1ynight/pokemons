import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from '../services/githubApi';

export default configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});