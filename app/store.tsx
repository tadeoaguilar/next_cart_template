import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {counterSlice}  from './reducers/productReducers';

const store = configureStore({
    reducer: {
        counter:counterSlice.reducer
    },
    
});

export type RootState = ReturnType<typeof counterSlice.reducer>;

export const useAppDispatch = () => useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
