import { combineReducers, configureStore } from "@reduxjs/toolkit";
import airportReducer from "./slices/airportSlice";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  airportReducer,
  authReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
