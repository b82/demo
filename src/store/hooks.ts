/**
 * Typed Redux Hooks Module
 * 
 * Provides type-safe hooks for accessing Redux store and dispatching actions.
 * These hooks are typed with the application's RootState and AppDispatch types
 * to ensure type safety throughout the application.
 * 
 * @module store/hooks
 */

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './index';

/**
 * Typed version of useDispatch hook
 * 
 * @description Returns a typed dispatch function that only accepts actions
 * compatible with the application's Redux store. Provides full TypeScript
 * autocomplete and type checking for dispatched actions.
 * 
 * @returns {AppDispatch} Typed dispatch function
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const dispatch = useAppDispatch();
 *   
 *   const handleClick = () => {
 *     dispatch(setCurrentPage('dashboard'));
 *     dispatch(toggleSidebar());
 *   };
 * }
 * ```
 * 
 * @remarks
 * - Use this instead of the raw useDispatch hook for type safety
 * - All dispatched actions are type-checked at compile time
 */
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

/**
 * Typed version of useSelector hook
 * 
 * @description Returns a typed selector hook that provides type-safe access
 * to the Redux store state. The selector function receives a typed RootState
 * parameter for full autocomplete support.
 * 
 * @type {TypedUseSelectorHook<RootState>}
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const currentPage = useAppSelector((state) => state.ui.currentPage);
 *   const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);
 *   
 *   return <div>Current page: {currentPage}</div>;
 * }
 * ```
 * 
 * @example
 * ```tsx
 * // With memoized selector
 * const selectCurrentPage = (state: RootState) => state.ui.currentPage;
 * const currentPage = useAppSelector(selectCurrentPage);
 * ```
 * 
 * @remarks
 * - Use this instead of the raw useSelector hook for type safety
 * - Selector functions receive fully typed state parameter
 * - Return values are automatically typed based on selector return type
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

