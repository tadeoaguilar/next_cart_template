import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderDetail } from '../lib/databaseStructure';

type cartItemsState = OrderDetail

const initialState: cartItemsState[] = 
  typeof window !== 'undefined' && 
  window.localStorage.getItem('cartItems') ? JSON.parse(window.localStorage.getItem('cartItems') || '{}') : []

export const userCartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {

    
    cartAddItem: (state: cartItemsState[], action: PayloadAction<cartItemsState>) => {
      console.log("state",state)
      console.log("action",action.payload)
  
      

      const item = action.payload
      const existItem = state.find((x) => x.productId === item.productId) 

      if (existItem) {
        const newState = [ ...state.map((x)=> x.productId===item.productId?{...x,quantity:x.quantity +1 }:x)]
        typeof window !== 'undefined' && window.localStorage.setItem('cartItems', JSON.stringify(newState))  
        
        return (newState)
      }
      else
      {

      
     typeof window !== 'undefined' && window.localStorage.setItem('cartItems', JSON.stringify([...state,{...item}]))   
      return ([...state,{...item}])
    }
    }
     
    },
  },
)

// Action creators are generated for each case reducer function
export const {  cartAddItem } = userCartSlice.actions

export default userCartSlice.reducer  
