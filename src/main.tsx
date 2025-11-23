/**
 * Application Entry Point Module
 * 
 * Initializes React application with Redux store provider.
 * This is the first file executed when the application loads.
 * 
 * @module main
 */

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App.tsx";
import "./index.css";

/**
 * Root DOM Element
 * 
 * @description Gets the root HTML element where the React application
 * will be mounted. Throws an error if the element is not found.
 * 
 * @constant {HTMLElement | null}
 * 
 * @throws {Error} If the root element with id "root" is not found in the DOM
 */
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

/**
 * Application Initialization
 * 
 * @description Creates a React root and renders the application with
 * Redux Provider wrapper. The Provider makes the Redux store available
 * to all nested components.
 * 
 * @example
 * ```tsx
 * // The application structure:
 * <Provider store={store}>
 *   <App />
 * </Provider>
 * ```
 * 
 * @remarks
 * - Uses React 18's createRoot API for concurrent rendering
 * - Wraps App component with Redux Provider for state management
 * - Imports global CSS styles from index.css
 */
createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
