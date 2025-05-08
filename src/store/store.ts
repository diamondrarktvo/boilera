import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { BaseApi } from "_services";
import themeReducer from "../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    [BaseApi.reducerPath]: BaseApi.reducer,
    theme: themeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
