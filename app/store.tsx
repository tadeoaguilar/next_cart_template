import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {counterSlice}  from './reducers/productReducers';

const store = configureStore({
    reducer: {
        counter:counterSlice.reducer
    },
    
});

export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
