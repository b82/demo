/**
 * Typed Redux Hooks
 * 
 * Provides type-safe hooks for accessing Redux store and dispatching actions.
 * 
 * module store/hooks
 */

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './index';

/**
 * Typed version of useDispatch hook
 * 
 * example
 * ```tsx
 * const dispatch = useAppDispatch();
 * dispatch(setCurrentPage('dashboard'));
 * ```
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Typed version of useSelector hook
 * 
 * example
 * ```tsx
 * const currentPage = useAppSelector((state) => state.ui.currentPage);
 * ```
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

