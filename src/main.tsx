/**
 * Application Entry Point
 * 
 * Initializes React application with Redux store provider.
 * 
 * module main
 */

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
