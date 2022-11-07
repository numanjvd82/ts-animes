import { configureStore } from '@reduxjs/toolkit';
import { animeSlice } from './slices/animeSlice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    animes: animeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
