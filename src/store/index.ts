/**
 * Redux Store Configuration Module
 * 
 * Centralized state management for the dashboard application.
 * Uses Redux Toolkit for simplified state management and RTK Query for data fetching.
 * 
 * @module store
 */

import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './slices/uiSlice';
import { dashboardApi } from './api/dashboardApi';

/**
 * Main Redux Store Instance
 * 
 * @description Configures and exports the Redux store with all reducers and middleware.
 * Includes UI state management and RTK Query API integration.
 * 
 * @constant {Store}
 * 
 * @remarks
 * - Uses Redux Toolkit's configureStore for optimal defaults
 * - Includes middleware for RTK Query API calls
 * - Enables Redux DevTools extension in development mode
 * - Configures serializable check to ignore certain action types
 * 
 * @example
 * ```tsx
 * import { store } from './store';
 * import { Provider } from 'react-redux';
 * 
 * <Provider store={store}>
 *   <App />
 * </Provider>
 * ```
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

/**
 * Root State Type
 * 
 * @description TypeScript type representing the complete Redux store state.
 * Automatically inferred from the store configuration.
 * 
 * @typedef {ReturnType<typeof store.getState>} RootState
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * App Dispatch Type
 * 
 * @description TypeScript type representing the Redux dispatch function
 * with all action creators typed. Used for type-safe action dispatching.
 * 
 * @typedef {typeof store.dispatch} AppDispatch
 */
export type AppDispatch = typeof store.dispatch;

