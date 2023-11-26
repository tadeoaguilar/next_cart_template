import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface cartItemsState {
  userId?: string,
  productId: string,
  quantity: number

}

const initialState: cartItemsState[] = []//localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') || '{}') : []

export const userCartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {

    
    cartAddItem: (state: cartItemsState[], action: PayloadAction<cartItemsState>) => {
      console.log("state",state)
      console.log("action",action.payload)
  
      console.log({...state, ...action.payload})

      const item = action.payload
      const existItem = state.find((x) => x.productId === item.productId) 

      if (existItem) {
        const newState = [ ...state.map((x)=> x.productId===item.productId?{...x,quantity:x.quantity+1}:x)]
        //localStorage.setItem('cartItems', JSON.stringify(newState))
        return (newState)
      }
      else
      {

      console.log("NO existItem",)
     // localStorage.setItem('cartItems', JSON.stringify([...state,{...item}]))   
      return ([...state,{...item}])
    }
    }
     
    },
  },
)

// Action creators are generated for each case reducer function
export const {  cartAddItem } = userCartSlice.actions

export default userCartSlice.reducer  
