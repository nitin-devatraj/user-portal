import { configureStore } from "@reduxjs/toolkit";
import themeReducer, { ThemeState } from "./theme-slice"; // Import ThemeState type from your theme slice file

// Define the root state type
export interface RootState {
  theme: ThemeState; // Include types for all your reducers
}

const store = configureStore<RootState>({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
