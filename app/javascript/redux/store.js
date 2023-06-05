import { configureStore } from "@reduxjs/toolkit";
import greetingApi from "./greeting";

const store = configureStore({
  reducer: {
    [greetingApi.reducerPath]: greetingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(greetingApi.middleware),
});

export default store;
