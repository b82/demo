/**
 * Redux Store Configuration
 * 
 * Centralized state management for the dashboard application.
 * Uses Redux Toolkit for simplified state management and RTK Query for data fetching.
 * 
 * module store
 */

import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './slices/uiSlice';
import { dashboardApi } from './api/dashboardApi';

/**
 * Main Redux store configuration
 * 
 * remarks
 * - Uses Redux Toolkit's configureStore for optimal defaults
 * - Includes middleware for RTK Query
 * - Enables Redux DevTools in development
 */
export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types for serialization check
        ignoredActions: ['ui/setTheme'],
      },
    }).concat(dashboardApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

