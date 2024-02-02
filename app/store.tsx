import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { counterSlice } from "./reducers/productReducers";
import { userSlice } from "./reducers/userReducers";
import { userCartSlice } from "./reducers/cartReducers";
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    userCart: userCartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
