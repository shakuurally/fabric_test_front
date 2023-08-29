// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import movieApi from "./Slice";

const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    // Add other reducers if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export default store;
